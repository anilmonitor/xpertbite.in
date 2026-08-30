import crypto from "crypto";

export interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  format?: string;
  width?: number;
  height?: number;
}

/**
 * Uploads an image (Base64 string or buffer) to Cloudinary.
 * Works seamlessly with Cloudinary REST API so no external heavy packages are strictly required.
 */
export async function uploadToCloudinary(
  base64Data: string,
  folder = "durgapuja2026"
): Promise<CloudinaryUploadResult | null> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  // If Cloudinary is not configured yet, return null (handled gracefully by API route)
  if (!cloudName) {
    return null;
  }

  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const formData = new FormData();
    formData.append("file", base64Data);
    formData.append("folder", folder);
    formData.append("timestamp", timestamp.toString());

    if (uploadPreset) {
      formData.append("upload_preset", uploadPreset);
    } else if (apiKey && apiSecret) {
      // Generate SHA1 signature for signed upload
      const paramsToSign = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
      const signature = crypto.createHash("sha1").update(paramsToSign).digest("hex");
      formData.append("api_key", apiKey);
      formData.append("signature", signature);
    }

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cloudinary upload failed:", errorText);
      return null;
    }

    const data = await response.json();
    return {
      secure_url: data.secure_url,
      public_id: data.public_id,
      format: data.format,
      width: data.width,
      height: data.height,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return null;
  }
}
