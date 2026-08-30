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
    if ("durgaGreeting" in prisma) {
      const count = await (prisma as any).durgaGreeting.count();
      nextNumber = count + 1;
    }
  } catch {}

  let candidateSlug = `${clean}-${nextNumber}`;

  try {
    if ("durgaGreeting" in prisma) {
      let exists = await (prisma as any).durgaGreeting.findFirst({
        where: { slug: candidateSlug },
      });
      let attempts = 0;
      while (exists && attempts < 50) {
        nextNumber++;
        candidateSlug = `${clean}-${nextNumber}`;
        exists = await (prisma as any).durgaGreeting.findFirst({
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

    // 1. Upload to Cloudinary if imageBase64 is provided
    if (imageBase64 && typeof imageBase64 === "string" && imageBase64.startsWith("data:image")) {
      const cloudinaryResult = await uploadToCloudinary(imageBase64, "durgapuja2026");
      if (cloudinaryResult) {
        finalImageUrl = cloudinaryResult.secure_url;
        cloudinaryPublicId = cloudinaryResult.public_id;
      } else {
        finalImageUrl = imageBase64;
      }
    }

    // 2. Generate sequential unique slug starting from 1 (e.g. anil-1, rahul-2, anil-3)
    const slug = await generateSequentialSlug(name);

    // 3. Save into Database via Prisma
    let savedGreeting;
    try {
      if ("durgaGreeting" in prisma) {
        savedGreeting = await (prisma as any).durgaGreeting.create({
          data: {
            slug,
            name: name.trim(),
            message: message || "दुर्गा पूजा की हार्दिक शुभकामनाएं",
            imageUrl: finalImageUrl,
            cloudinaryPublicId,
          },
        });
      } else {
        savedGreeting = {
          id: slug,
          slug,
          name: name.trim(),
          message: message || "दुर्गा पूजा की हार्दिक शुभकामनाएं",
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
        message: message || "दुर्गा पूजा की हार्दिक शुभकामनाएं",
        imageUrl: finalImageUrl,
        cloudinaryPublicId,
        createdAt: new Date(),
      };
    }

    const host = req.headers.get("host") || "xpertbite.in";
    const protocol = host.includes("localhost") ? "http" : "https";
    const shortSlug = savedGreeting.slug || slug;
    const shareUrl = `${protocol}://${host}/durgapuja2026?u=${shortSlug}`;

    return NextResponse.json({
      success: true,
      greeting: {
        ...savedGreeting,
        slug: shortSlug,
        shareUrl,
      },
    });
  } catch (error: any) {
    console.error("API error in /api/durgapuja:", error);
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
      if ("durgaGreeting" in prisma) {
        const greeting = await (prisma as any).durgaGreeting.findFirst({
          where: {
            OR: [
              { slug: slug },
              { id: slug },
            ],
          },
        });

        if (greeting) {
          try {
            await (prisma as any).durgaGreeting.update({
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
