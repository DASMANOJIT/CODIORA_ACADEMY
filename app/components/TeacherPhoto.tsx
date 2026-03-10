"use client";

import { useState } from "react";

type TeacherPhotoProps = {
  src: string;
  alt: string;
};

export default function TeacherPhoto({ src, alt }: TeacherPhotoProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(245,166,35,0.10) 0%, rgba(255,255,255,0.04) 60%)",
        position: "relative",
      }}
    >
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 220ms ease",
          }}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}

