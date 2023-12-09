import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json(tickets, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    const newTicket = new Ticket(ticketData);
    await newTicket.save();

    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
