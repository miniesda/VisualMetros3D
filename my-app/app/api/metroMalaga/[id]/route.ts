import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!/^\d+$/.test(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const response = await fetch(
    `https://www.tib.org/o/manager/stop-code/${id}/departures/ctmr4`,
    { cache: "no-store" }
  );

  const data = await response.text();

  return new NextResponse(data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}