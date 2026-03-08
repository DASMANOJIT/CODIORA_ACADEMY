import { NextResponse } from "next/server";

export const runtime = "nodejs";

type InstagramFeedItem = {
  id?: string;
  code?: string;
  product_type?: string;
  media_type?: number;
  display_uri?: string;
  image_versions2?: {
    candidates?: Array<{ url?: string }>;
  };
  caption?: {
    text?: string;
  };
};

type InstagramItem = {
  id: string;
  url: string;
  thumbnail: string;
  caption: string;
};

const USERNAME = "codiora_academy";
const USER_ID = "78621809344";
const PROFILE_URL = `https://www.instagram.com/${USERNAME}/`;

const REQUEST_HEADERS: HeadersInit = {
  "x-ig-app-id": "936619743392459",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  accept: "text/html,application/json;q=0.9,*/*;q=0.8",
};

const CACHE_HEADERS = {
  "Cache-Control": "s-maxage=900, stale-while-revalidate=3600",
};

const FALLBACK_CODES = [
  {
    code: "DVlW5vgj7ff",
    caption: "Day 1/21: Java logic mastery and coding fundamentals.",
  },
  {
    code: "DViOtcyjwGO",
    caption: "21-day coding challenge updates from Codiora Academy.",
  },
  {
    code: "DVnucmNj2Bk",
    caption: "International Women's Day message from Codiora Academy.",
  },
  {
    code: "DVacAJyj97U",
    caption: "Holi wishes from Codiora Academy.",
  },
  {
    code: "DVZEB5ak7-e",
    caption: "YouTube lesson launch update.",
  },
  {
    code: "DRlyX3ED1nD",
    caption: "Motivation for learners beginning coding.",
  },
];

const fallbackItems: InstagramItem[] = FALLBACK_CODES.map((entry) => ({
  id: entry.code,
  url: `https://www.instagram.com/p/${entry.code}/`,
  thumbnail: `/api/social/instagram/image/${entry.code}`,
  caption: entry.caption,
}));

const toInstagramItem = (item: InstagramFeedItem): InstagramItem | null => {
  if (!item.code) return null;

  const isReel =
    (item.product_type || "").toLowerCase() === "clips" ||
    (item.product_type || "").toLowerCase() === "igtv" ||
    item.media_type === 2;

  const mediaPath = isReel ? "reel" : "p";

  return {
    id: item.id || item.code,
    url: `https://www.instagram.com/${mediaPath}/${item.code}/`,
    thumbnail: `/api/social/instagram/image/${item.code}`,
    caption: item.caption?.text || "",
  };
};

async function fetchInstagramTimeline() {
  const timelineUrl = `https://www.instagram.com/api/v1/feed/user/${USER_ID}/?count=12`;

  const timelineResponse = await fetch(timelineUrl, {
    headers: {
      ...REQUEST_HEADERS,
      accept: "application/json",
      "x-requested-with": "XMLHttpRequest",
    },
    next: { revalidate: 900 },
  });

  if (!timelineResponse.ok) {
    throw new Error(`Instagram timeline status ${timelineResponse.status}`);
  }

  const timelineJson = await timelineResponse.json();
  const timelineItems: InstagramFeedItem[] = timelineJson?.items || [];

  const mapped = timelineItems
    .map(toInstagramItem)
    .filter((entry): entry is InstagramItem => Boolean(entry));

  const reelItems = mapped.filter((entry) => entry.url.includes("/reel/"));
  const selected = (reelItems.length > 0 ? reelItems : mapped).slice(0, 6);
  return selected.length > 0 ? selected : fallbackItems;
}

export async function GET() {
  try {
    const items = await fetchInstagramTimeline();

    return NextResponse.json(
      {
        items,
        profileUrl: PROFILE_URL,
      },
      { headers: CACHE_HEADERS }
    );
  } catch (error) {
    console.error("[INSTAGRAM_FEED]", {
      message: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      {
        items: fallbackItems,
        profileUrl: PROFILE_URL,
      },
      { headers: CACHE_HEADERS }
    );
  }
}
