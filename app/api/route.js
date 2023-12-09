import Ticket from "../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.body();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket created" }, { status: "201" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: "500" });
  }
}
