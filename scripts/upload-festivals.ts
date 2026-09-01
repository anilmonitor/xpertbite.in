import fs from "fs";
import path from "path";
import crypto from "crypto";

const CLOUD_NAME = "sgungip2";
const API_KEY = "188143841762721";
const API_SECRET = "ECRSpjBkRjGAZSDR2OXNfB64MGM";

const images = [
  { filePath: "public/durgapuja/durga_mata_portrait.jpg", folder: "xpertbite/durgapuja", publicId: "durga_mata_portrait" },
  { filePath: "public/durgapuja/durga_mata_sticker.jpg", folder: "xpertbite/durgapuja", publicId: "durga_mata_sticker" },
  { filePath: "public/durgapuja/durga_puja_banner.jpg", folder: "xpertbite/durgapuja", publicId: "durga_puja_banner" },
  { filePath: "public/diwali/diwali_portrait.jpg", folder: "xpertbite/diwali", publicId: "diwali_portrait" },
  { filePath: "public/chhath/chhath_portrait.jpg", folder: "xpertbite/chhath", publicId: "chhath_portrait" },
];

async function uploadFile(item: typeof images[0]) {
  const fullPath = path.resolve(process.cwd(), item.filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return null;
  }

  const fileBuffer = fs.readFileSync(fullPath);
  const base64Data = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;
  const timestamp = Math.round(new Date().getTime() / 1000);

  // Params to sign (alphabetical order): folder, public_id, timestamp
  const paramsToSign = `folder=${item.folder}&public_id=${item.publicId}&timestamp=${timestamp}${API_SECRET}`;
  const signature = crypto.createHash("sha1").update(paramsToSign).digest("hex");

  const formData = new FormData();
  formData.append("file", base64Data);
  formData.append("folder", item.folder);
  formData.append("public_id", item.publicId);
  formData.append("timestamp", timestamp.toString());
  formData.append("api_key", API_KEY);
  formData.append("signature", signature);

  console.log(`Uploading ${item.filePath}...`);
  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Failed to upload ${item.filePath}:`, errorText);
    return null;
  }

  const data = await response.json();
  console.log(`✓ Uploaded ${item.filePath} => ${data.secure_url}`);
  return {
    file: item.filePath,
    url: data.secure_url,
    public_id: data.public_id,
  };
}

async function main() {
  console.log("Starting upload to Cloudinary...");
  const results = [];
  for (const img of images) {
    const res = await uploadFile(img);
    if (res) results.push(res);
  }
  console.log("\n--- All Uploads Summary ---");
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);
