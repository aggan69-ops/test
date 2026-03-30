
import { NextRequest, NextResponse } from "next/server";
import { addActivity, getActivities } from "@/lib/activity-store";

export async function GET() {
  return NextResponse.json({ data: getActivities() });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const activity = addActivity(body);

  return NextResponse.json({
    message: "Activity skapad",
    activity
  });
}
