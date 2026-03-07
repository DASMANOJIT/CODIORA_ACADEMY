import { NextRequest, NextResponse } from "next/server";

const rawAppsScriptUrl =
  process.env.APPS_SCRIPT_URL || process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "";
const APPS_SCRIPT_URL = rawAppsScriptUrl.trim().replace(/^["']|["']$/g, "");

export async function POST(req: NextRequest) {
  try {
    if (!APPS_SCRIPT_URL) {
      return NextResponse.json(
        { error: "Apps Script URL is not configured." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { fullName, whatsappNumber, studentClass, board } = body;

    if (!fullName || !whatsappNumber || !studentClass || !board) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      redirect: "manual",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fullName,
        phone: whatsappNumber,
        studentClass,
        board,
        time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      }),
    });

    // Apps Script web app POST commonly returns 302 before final content.
    const isAcceptedByAppsScript =
      response.ok || response.status === 302 || response.status === 303;

    if (!isAcceptedByAppsScript) {
      throw new Error("Google Apps Script returned an error.");
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("[LEADS_POST]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
