"use server";

import { contactFormSchema, bookingFormSchema, quoteFormSchema } from "@/lib/validations/contact";
import { prisma } from "@/lib/prisma";

export async function submitContactForm(data: any) {
  const result = contactFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }
  
  try {
    const contact = await prisma.contact.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone || null,
        subject: result.data.subject,
        message: result.data.message,
      },
    });
    console.log("Saved contact message to DB:", contact);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to submit contact message:", error);
    return { success: false, error: "Failed to submit message." };
  }
}

export async function submitBookingForm(data: any) {
  const result = bookingFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  try {
    const booking = await prisma.booking.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        type: result.data.type,
        date: result.data.date,
        time: result.data.time,
        description: result.data.description,
      },
    });
    console.log("Saved booking details to DB:", booking);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to submit booking:", error);
    return { success: false, error: "Failed to book meeting." };
  }
}

export async function submitQuoteForm(data: any) {
  const result = quoteFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  try {
    const quote = await prisma.quote.create({
      data: {
        name: result.data.name,
        company: result.data.company,
        email: result.data.email,
        category: result.data.category,
        budget: result.data.budget,
        description: result.data.description,
      },
    });
    console.log("Saved quote request to DB:", quote);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to submit quote:", error);
    return { success: false, error: "Failed to submit quote request." };
  }
}

export async function getLeads() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });
    const quotes = await prisma.quote.findMany({
      orderBy: { createdAt: "desc" },
    });

    const formattedContacts = contacts.map(c => ({
      id: c.id,
      name: c.name,
      email: c.email,
      phone: c.phone,
      subject: c.subject,
      message: c.message,
      date: new Date(c.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      rawDate: c.createdAt,
      type: "Contact",
      status: c.status,
    }));

    const formattedBookings = bookings.map(b => ({
      id: b.id,
      name: b.name,
      email: b.email,
      phone: null,
      subject: `Consultation Booking`,
      message: b.description,
      date: new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      rawDate: b.createdAt,
      type: "Booking",
      status: b.status,
      bookingDetails: {
        callType: b.type,
        date: b.date,
        time: b.time,
      }
    }));

    const formattedQuotes = quotes.map(q => ({
      id: q.id,
      name: q.name,
      email: q.email,
      phone: null,
      subject: `Project Estimate Request`,
      message: q.description,
      date: new Date(q.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      rawDate: q.createdAt,
      type: "Quote",
      status: q.status,
      quoteDetails: {
        company: q.company,
        category: q.category,
        budget: q.budget,
      }
    }));

    const allLeads = [
      ...formattedContacts,
      ...formattedBookings,
      ...formattedQuotes
    ].sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime());

    return { success: true, leads: allLeads };
  } catch (error: any) {
    console.error("Failed to fetch leads:", error);
    return { success: false, error: "Failed to fetch leads from database." };
  }
}

export async function resolveLead(id: string, type: string) {
  try {
    if (type === "Contact") {
      await prisma.contact.update({
        where: { id },
        data: { status: "Read" },
      });
    } else if (type === "Booking") {
      await prisma.booking.update({
        where: { id },
        data: { status: "Confirmed" },
      });
    } else if (type === "Quote") {
      await prisma.quote.update({
        where: { id },
        data: { status: "Reviewed" },
      });
    }
    return { success: true };
  } catch (error: any) {
    console.error("Failed to resolve lead:", error);
    return { success: false, error: "Failed to resolve lead status." };
  }
}
