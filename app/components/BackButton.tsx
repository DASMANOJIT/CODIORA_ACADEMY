"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  fallbackHref?: string;
  label?: string;
};

export default function BackButton({ fallbackHref = "/", label = "Back" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        // Prefer real history back; fall back to a safe internal route.
        if (typeof window !== "undefined" && window.history.length > 1) router.back();
        else router.push(fallbackHref);
      }}
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.75)",
        padding: "10px 14px",
        borderRadius: "12px",
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13px",
        fontWeight: 700,
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(245,166,35,0.35)";
        e.currentTarget.style.color = "#F5A623";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.color = "rgba(255,255,255,0.75)";
      }}
    >
      <span aria-hidden="true" style={{ fontSize: "16px", lineHeight: 1 }}>
        ←
      </span>
      <span>{label}</span>
    </button>
  );
}

