import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const REQUEST_HEADERS: HeadersInit = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
};

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await params;
    const cleanCode = (code || "").trim();

    if (!/^[A-Za-z0-9_-]{5,}$/.test(cleanCode)) {
      return NextResponse.json({ error: "Invalid code" }, { status: 400 });
    }

    const imageUrl = `https://www.instagram.com/p/${cleanCode}/media/?size=l`;
    const response = await fetch(imageUrl, {
      headers: REQUEST_HEADERS,
      redirect: "follow",
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`Instagram image status ${response.status}`);
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const bytes = await response.arrayBuffer();

    return new NextResponse(bytes, {
      status: 200,
      headers: {
        ...CACHE_HEADERS,
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("[INSTAGRAM_IMAGE_PROXY]", {
      message: error instanceof Error ? error.message : "Unknown error",
    });

    const fallbackUrl = new URL("/logo.png", req.url);
    return NextResponse.redirect(fallbackUrl, { status: 302 });
  }
}
