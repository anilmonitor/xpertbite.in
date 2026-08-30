import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadToCloudinary } from "@/lib/cloudinary";

async function generateSequentialSlug(name: string): Promise<string> {
  let clean = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  if (!clean || clean.length < 2) {
    clean = "anil";
  } else if (clean.length > 15) {
    clean = clean.substring(0, 15);
  }

  let nextNumber = 1;
  try {
    if ("diwaliGreeting" in prisma) {
      const count = await (prisma as any).diwaliGreeting.count();
      nextNumber = count + 1;
    }
  } catch {}

  let candidateSlug = `${clean}-${nextNumber}`;

  try {
    if ("diwaliGreeting" in prisma) {
      let exists = await (prisma as any).diwaliGreeting.findFirst({
        where: { slug: candidateSlug },
      });
      let attempts = 0;
      while (exists && attempts < 50) {
        nextNumber++;
        candidateSlug = `${clean}-${nextNumber}`;
        exists = await (prisma as any).diwaliGreeting.findFirst({
          where: { slug: candidateSlug },
        });
        attempts++;
      }
    }
  } catch {}

  return candidateSlug;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, message, imageBase64 } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    let finalImageUrl: string | null = null;
    let cloudinaryPublicId: string | null = null;

    if (imageBase64 && typeof imageBase64 === "string" && imageBase64.startsWith("data:image")) {
      const cloudinaryResult = await uploadToCloudinary(imageBase64, "diwali2026");
      if (cloudinaryResult) {
        finalImageUrl = cloudinaryResult.secure_url;
        cloudinaryPublicId = cloudinaryResult.public_id;
      } else {
        finalImageUrl = imageBase64;
      }
    }

    const slug = await generateSequentialSlug(name);

    let savedGreeting;
    try {
      if ("diwaliGreeting" in prisma) {
        savedGreeting = await (prisma as any).diwaliGreeting.create({
          data: {
            slug,
            name: name.trim(),
            message: message || "दीपावली की हार्दिक शुभकामनाएं",
            imageUrl: finalImageUrl,
            cloudinaryPublicId,
          },
        });
      } else {
        savedGreeting = {
          id: slug,
          slug,
          name: name.trim(),
          message: message || "दीपावली की हार्दिक शुभकामनाएं",
          imageUrl: finalImageUrl,
          cloudinaryPublicId,
          createdAt: new Date(),
        };
      }
    } catch (dbErr) {
      console.warn("DB save note:", dbErr);
      savedGreeting = {
        id: slug,
        slug,
        name: name.trim(),
        message: message || "दीपावली की हार्दिक शुभकामनाएं",
        imageUrl: finalImageUrl,
        cloudinaryPublicId,
        createdAt: new Date(),
      };
    }

    const host = req.headers.get("host") || "xpertbite.in";
    const protocol = host.includes("localhost") ? "http" : "https";
    const shortSlug = savedGreeting.slug || slug;
    const shareUrl = `${protocol}://${host}/diwaliPuja2026?u=${shortSlug}`;

    return NextResponse.json({
      success: true,
      greeting: {
        ...savedGreeting,
        slug: shortSlug,
        shareUrl,
      },
    });
  } catch (error: any) {
    console.error("API error in /api/diwali:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const u = searchParams.get("u");
    const id = searchParams.get("id");
    const slug = searchParams.get("slug") || u || id;

    if (slug) {
      if ("diwaliGreeting" in prisma) {
        const greeting = await (prisma as any).diwaliGreeting.findFirst({
          where: {
            OR: [
              { slug: slug },
              { id: slug },
            ],
          },
        });

        if (greeting) {
          try {
            await (prisma as any).diwaliGreeting.update({
              where: { id: greeting.id },
              data: { views: { increment: 1 } },
            });
          } catch {}

          return NextResponse.json({ success: true, greeting });
        }
      }
    }

    return NextResponse.json({ success: false, error: "Greeting not found" }, { status: 404 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
