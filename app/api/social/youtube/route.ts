import { NextResponse } from "next/server";

export const runtime = "nodejs";

type YouTubeItem = {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
};

const CHANNEL_HANDLE_URL = "https://www.youtube.com/@codioraacademy";

const REQUEST_HEADERS: HeadersInit = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  accept: "text/html,application/xml;q=0.9,*/*;q=0.8",
};

const CACHE_HEADERS = {
  "Cache-Control": "s-maxage=900, stale-while-revalidate=3600",
};

const fallbackItems: YouTubeItem[] = [
  {
    id: "yt-fallback-1",
    url: CHANNEL_HANDLE_URL,
    title: "Watch the latest lessons on Codiora Academy",
    thumbnail: "/logo.png",
    publishedAt: "",
  },
  {
    id: "yt-fallback-2",
    url: CHANNEL_HANDLE_URL,
    title: "Coding tutorials and exam-focused videos",
    thumbnail: "/logo.png",
    publishedAt: "",
  },
  {
    id: "yt-fallback-3",
    url: CHANNEL_HANDLE_URL,
    title: "Visit our channel for new uploads",
    thumbnail: "/logo.png",
    publishedAt: "",
  },
];

const decodeXml = (value: string) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

function getChannelId(html: string) {
  const patterns = [
    /"externalId":"(UC[^"]+)"/,
    /"channelId":"(UC[^"]+)"/,
    /"browseId":"(UC[^"]+)"/,
    /channel_id=(UC[^"&]+)/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return match[1];
  }

  return null;
}

function parseRss(xml: string): YouTubeItem[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];

  return entries
    .map((entry) => {
      const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1];
      const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
      const url = entry.match(/<link[^>]*href="([^"]+)"/)?.[1];
      const publishedAt = entry.match(/<published>(.*?)<\/published>/)?.[1] || "";

      if (!videoId || !title || !url) return null;

      return {
        id: videoId,
        url,
        title: decodeXml(title),
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        publishedAt,
      } as YouTubeItem;
    })
    .filter((item): item is YouTubeItem => Boolean(item))
    .slice(0, 6);
}

export async function GET() {
  try {
    const channelPage = await fetch(`${CHANNEL_HANDLE_URL}/videos`, {
      headers: REQUEST_HEADERS,
      next: { revalidate: 900 },
    });

    if (!channelPage.ok) {
      throw new Error(`YouTube channel page status ${channelPage.status}`);
    }

    const html = await channelPage.text();
    const channelId = getChannelId(html);

    if (!channelId) {
      throw new Error("Unable to resolve YouTube channel ID");
    }

    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const rssResponse = await fetch(rssUrl, {
      headers: REQUEST_HEADERS,
      next: { revalidate: 900 },
    });

    if (!rssResponse.ok) {
      throw new Error(`YouTube RSS status ${rssResponse.status}`);
    }

    const xml = await rssResponse.text();
    const items = parseRss(xml);

    return NextResponse.json(
      {
        items: items.length > 0 ? items : fallbackItems,
        channelUrl: CHANNEL_HANDLE_URL,
      },
      { headers: CACHE_HEADERS }
    );
  } catch (error) {
    console.error("[YOUTUBE_FEED]", {
      message: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      {
        items: fallbackItems,
        channelUrl: CHANNEL_HANDLE_URL,
      },
      { headers: CACHE_HEADERS }
    );
  }
}
