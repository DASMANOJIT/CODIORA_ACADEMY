import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Public webhook URL; keep as a final fallback so production still works
// when Vercel env vars are missing.
const FALLBACK_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyz-oMF2ppaQR1eoWczwzUdzKi8Mk0A9r5fWjR3xtWYb1PJKzZDqup5AjHzr9cVvHgD/exec";

const sanitizeEnvUrl = (value?: string) =>
  (value || "").trim().replace(/^["']|["']$/g, "");

const getAppsScriptUrl = () => {
  const fromServer = sanitizeEnvUrl(process.env.APPS_SCRIPT_URL);
  const fromPublic = sanitizeEnvUrl(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL);
  return fromServer || fromPublic || FALLBACK_APPS_SCRIPT_URL;
};

const isAcceptedAppsScriptStatus = (status: number) =>
  (status >= 200 && status < 300) || status === 302 || status === 303;

const postToAppsScript = async (url: string, payload: Record<string, string>) => {
  const jsonResponse = await fetch(url, {
    method: "POST",
    redirect: "manual",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (isAcceptedAppsScriptStatus(jsonResponse.status)) {
    return { ok: true, status: jsonResponse.status, mode: "json" as const };
  }

  const formBody = new URLSearchParams(payload).toString();
  const formResponse = await fetch(url, {
    method: "POST",
    redirect: "manual",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formBody,
  });

  if (isAcceptedAppsScriptStatus(formResponse.status)) {
    return { ok: true, status: formResponse.status, mode: "form" as const };
  }

  return {
    ok: false,
    jsonStatus: jsonResponse.status,
    formStatus: formResponse.status,
  };
};

export async function POST(req: NextRequest) {
  const appsScriptUrl = getAppsScriptUrl();

  try {
    if (!appsScriptUrl) {
      console.error("[LEADS_POST] Missing Apps Script URL", {
        hasServerEnv: Boolean(process.env.APPS_SCRIPT_URL),
        hasPublicEnv: Boolean(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL),
      });

      return NextResponse.json(
        { error: "Lead webhook is not configured.", code: "LEAD_WEBHOOK_MISSING" },
        { status: 500 }
      );
    }

    let body: {
      fullName?: string;
      whatsappNumber?: string;
      studentClass?: string;
      board?: string;
    };

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body.", code: "INVALID_JSON" },
        { status: 400 }
      );
    }

    const { fullName, whatsappNumber, studentClass, board } = body;

    if (!fullName || !whatsappNumber || !studentClass || !board) {
      return NextResponse.json(
        { error: "All fields are required.", code: "VALIDATION_ERROR" },
        { status: 400 }
      );
    }

    const result = await postToAppsScript(appsScriptUrl, {
      name: fullName,
      phone: whatsappNumber,
      studentClass,
      board,
      time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    });

    if (!result.ok) {
      console.error("[LEADS_POST] Apps Script rejected request", {
        urlHost: new URL(appsScriptUrl).host,
        jsonStatus: result.jsonStatus,
        formStatus: result.formStatus,
        vercelRegion: process.env.VERCEL_REGION || null,
      });

      return NextResponse.json(
        {
          error: "Failed to send lead to webhook.",
          code: "WEBHOOK_REJECTED",
          details: {
            jsonStatus: result.jsonStatus,
            formStatus: result.formStatus,
          },
        },
        { status: 502 }
      );
    }

    console.info("[LEADS_POST] Lead submitted", {
      mode: result.mode,
      status: result.status,
      vercelRegion: process.env.VERCEL_REGION || null,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("[LEADS_POST] Unhandled error", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      vercelRegion: process.env.VERCEL_REGION || null,
    });

    return NextResponse.json(
      { error: "Something went wrong. Please try again.", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
