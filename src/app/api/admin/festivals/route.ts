import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const festival = searchParams.get("type") || "all"; // 'durga', 'diwali', 'chhath', 'all'
    const query = searchParams.get("q") || "";
    const sort = searchParams.get("sort") === "oldest" ? "asc" : "desc";

    const results: {
      durga: any[];
      diwali: any[];
      chhath: any[];
      counts: { durga: number; diwali: number; chhath: number; total: number };
    } = {
      durga: [],
      diwali: [],
      chhath: [],
      counts: { durga: 0, diwali: 0, chhath: 0, total: 0 },
    };

    // 1. Fetch Durga Greetings
    if (festival === "all" || festival === "durga") {
      const where: any = {};
      if (query) {
        where.OR = [
          { name: { contains: query } },
          { slug: { contains: query } },
        ];
      }
      results.durga = await (prisma as any).durgaGreeting.findMany({
        where,
        orderBy: { createdAt: sort },
        take: 200,
      });
    }

    // 2. Fetch Diwali Greetings
    if (festival === "all" || festival === "diwali") {
      const where: any = {};
      if (query) {
        where.OR = [
          { name: { contains: query } },
          { slug: { contains: query } },
        ];
      }
      results.diwali = await (prisma as any).diwaliGreeting.findMany({
        where,
        orderBy: { createdAt: sort },
        take: 200,
      });
    }

    // 3. Fetch Chhath Greetings
    if (festival === "all" || festival === "chhath") {
      const where: any = {};
      if (query) {
        where.OR = [
          { name: { contains: query } },
          { slug: { contains: query } },
        ];
      }
      results.chhath = await (prisma as any).chhathGreeting.findMany({
        where,
        orderBy: { createdAt: sort },
        take: 200,
      });
    }

    // Live Counts directly from DB
    const durgaCount = await (prisma as any).durgaGreeting.count();
    const diwaliCount = await (prisma as any).diwaliGreeting.count();
    const chhathCount = await (prisma as any).chhathGreeting.count();

    results.counts = {
      durga: durgaCount,
      diwali: diwaliCount,
      chhath: chhathCount,
      total: durgaCount + diwaliCount + chhathCount,
    };

    return NextResponse.json({ success: true, data: results });
  } catch (error: any) {
    console.error("Admin festivals API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch festival data" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const type = searchParams.get("type"); // 'durga' | 'diwali' | 'chhath'

    if (!id || !type) {
      return NextResponse.json(
        { success: false, error: "ID and type are required" },
        { status: 400 }
      );
    }

    if (type === "durga") {
      await (prisma as any).durgaGreeting.delete({ where: { id } });
    } else if (type === "diwali") {
      await (prisma as any).diwaliGreeting.delete({ where: { id } });
    } else if (type === "chhath") {
      await (prisma as any).chhathGreeting.delete({ where: { id } });
    } else {
      return NextResponse.json({ success: false, error: "Invalid type" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Greeting deleted successfully" });
  } catch (error: any) {
    console.error("Admin festival delete error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to delete" },
      { status: 500 }
    );
  }
}
