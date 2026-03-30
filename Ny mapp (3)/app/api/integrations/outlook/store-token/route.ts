
import { NextRequest, NextResponse } from "next/server";
import { saveOutlookToken } from "@/lib/token-store";

export async function POST(req: NextRequest) {
  const token = await req.json();
  const saved = saveOutlookToken(token);

  return NextResponse.json({
    message: "Token sparad",
    saved
  });
}
