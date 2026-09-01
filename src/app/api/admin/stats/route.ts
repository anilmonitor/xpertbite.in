import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [
      durgaCount,
      diwaliCount,
      chhathCount,
      leadsCount,
      quotesCount,
      bookingsCount,
      blogsCount,
      servicesCount,
      productsCount,
      portfolioCount,
      recentGreetings,
    ] = await Promise.all([
      (prisma as any).durgaGreeting.count().catch(() => 0),
      (prisma as any).diwaliGreeting.count().catch(() => 0),
      (prisma as any).chhathGreeting.count().catch(() => 0),
      prisma.contact.count().catch(() => 0),
      prisma.quote.count().catch(() => 0),
      prisma.booking.count().catch(() => 0),
      prisma.blog.count().catch(() => 0),
      prisma.service.count().catch(() => 0),
      prisma.product.count().catch(() => 0),
      prisma.portfolio.count().catch(() => 0),
      (prisma as any).durgaGreeting.findMany({
        take: 3,
        orderBy: { createdAt: "desc" },
      }).catch(() => []),
    ]);

    const totalFestivalGreetings = durgaCount + diwaliCount + chhathCount;

    return NextResponse.json({
      success: true,
      stats: {
        totalFestivalGreetings,
        durgaCount,
        diwaliCount,
        chhathCount,
        leadsCount,
        quotesCount,
        bookingsCount,
        blogsCount,
        servicesCount,
        productsCount,
        portfolioCount,
      },
      recentGreetings,
    });
  } catch (error: any) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
