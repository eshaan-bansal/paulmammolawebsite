import React from "react";

export default function PMSwirl({ size = 60, color = "#F3CE8F" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r="28" stroke={color} strokeWidth="0.8" opacity="0.6" />
      <circle cx="30" cy="30" r="22" stroke={color} strokeWidth="0.6" opacity="0.5" />
      <circle cx="30" cy="30" r="16" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <circle cx="30" cy="30" r="10" stroke={color} strokeWidth="0.4" opacity="0.35" />
      <circle cx="30" cy="30" r="5" stroke={color} strokeWidth="0.4" opacity="0.3" />
      <line x1="10" y1="30" x2="50" y2="30" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <line x1="30" y1="10" x2="30" y2="50" stroke={color} strokeWidth="0.3" opacity="0.25" />
    </svg>
  );
}