
import { NextResponse } from "next/server";
import { addActivity } from "@/lib/activity-store";

export async function POST() {
  const call = addActivity({
    type: "call",
    entityId: "demo-customer",
    description: "Utgående samtal via Telavox"
  });

  return NextResponse.json({
    message: "Call loggad",
    call
  });
}
