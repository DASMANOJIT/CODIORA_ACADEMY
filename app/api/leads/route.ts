import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Fallback Google Apps Script URL
const FALLBACK_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyz-oMF2ppaQR1eoWczwzUdzKi8Mk0A9r5fWjR3xtWYb1PJKzZDqup5AjHzr9cVvHgD/exec";

const sanitizeEnvUrl = (value?: string) =>
  (value || "").trim().replace(/^["']|["']$/g, "");

const getAppsScriptUrl = () => {
  const fromServer = sanitizeEnvUrl(process.env.APPS_SCRIPT_URL);
  const fromPublic = sanitizeEnvUrl(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL);
  return fromServer || fromPublic || FALLBACK_APPS_SCRIPT_URL;
};

export async function POST(req: NextRequest) {
  const appsScriptUrl = getAppsScriptUrl();

  try {
    if (!appsScriptUrl) {
      console.error("[LEADS_POST] Missing Apps Script URL");

      return NextResponse.json(
        { error: "Lead webhook is not configured." },
        { status: 500 }
      );
    }

    let body;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const { fullName, whatsappNumber, studentClass, board } = body;

    if (!fullName || !whatsappNumber || !studentClass || !board) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const payload = new URLSearchParams({
      name: fullName,
      phone: whatsappNumber,
      studentClass,
      board,
      time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    });

    const response = await fetch(appsScriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    });

    if (!response.ok) {
      console.error("[LEADS_POST] Apps Script rejected request", {
        status: response.status,
        vercelRegion: process.env.VERCEL_REGION || null,
      });

      return NextResponse.json(
        { error: "Failed to send lead." },
        { status: 502 }
      );
    }

    console.info("[LEADS_POST] Lead submitted successfully", {
      status: response.status,
      vercelRegion: process.env.VERCEL_REGION || null,
    });

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("[LEADS_POST] Unhandled error", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      vercelRegion: process.env.VERCEL_REGION || null,
    });

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}