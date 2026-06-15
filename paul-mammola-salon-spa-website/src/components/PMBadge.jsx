import React from "react";

export default function PMBadge({ size = 220 }) {
  const isLarge = size >= 150;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 220 220"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <path id="arcTop" d="M 18,110 a 92,92 0 1,1 184,0" />
          <path id="arcBottom" d="M 202,110 a 92,92 0 1,1 -184,0" />
        </defs>

        {/* Outer rings */}
        <circle cx="110" cy="110" r="105" stroke="white" strokeWidth="1.5" />
        <circle cx="110" cy="110" r="98" stroke="white" strokeWidth="0.5" opacity="0.4" />

        {/* Arc text — rotating when large */}
        <g style={isLarge ? { animation: "rotate-badge 14s linear infinite", transformOrigin: "110px 110px" } : undefined}>
          <text fill="white" fontSize="9" fontFamily="Prompt, sans-serif" letterSpacing="2.8">
            <textPath href="#arcTop" startOffset="50%" textAnchor="middle">
              PAUL MAMMOLA SALON &amp; SPA
            </textPath>
          </text>
          <text fill="white" fontSize="9" fontFamily="Prompt, sans-serif" letterSpacing="2.8">
            <textPath href="#arcBottom" startOffset="50%" textAnchor="middle">
              LEXINGTON MA · EST. 1970
            </textPath>
          </text>
        </g>

        {/* Inner border circle */}
        <circle cx="110" cy="110" r="72" stroke="white" strokeWidth="0.6" opacity="0.5" />

        {/* Concentric inner rings — gold/green tones */}
        <circle cx="110" cy="110" r="60" stroke="#F3CE8F" strokeWidth="0.4" opacity="0.35" />
        <circle cx="110" cy="110" r="50" stroke="#c8a86b" strokeWidth="0.4" opacity="0.3" />
        <circle cx="110" cy="110" r="40" stroke="#B8934A" strokeWidth="0.4" opacity="0.3" />
        <circle cx="110" cy="110" r="30" stroke="#B8934A" strokeWidth="0.3" opacity="0.25" />
        <circle cx="110" cy="110" r="20" stroke="#F3CE8F" strokeWidth="0.3" opacity="0.2" />

        {/* Radiating lines — gold tinted */}
        <line x1="60" y1="110" x2="160" y2="110" stroke="#F3CE8F" strokeWidth="0.4" opacity="0.3" />
        <line x1="110" y1="62" x2="110" y2="158" stroke="#F3CE8F" strokeWidth="0.4" opacity="0.2" />
        <line x1="74" y1="74" x2="146" y2="146" stroke="#B8934A" strokeWidth="0.3" opacity="0.2" />
        <line x1="146" y1="74" x2="74" y2="146" stroke="#B8934A" strokeWidth="0.3" opacity="0.2" />

        {/* PM Monogram — gold, refined size */}
        <text
          x="110"
          y="116"
          textAnchor="middle"
          fill="#F3CE8F"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="36"
          fontWeight="400"
          letterSpacing="3"
        >
          PM
        </text>

        {/* SALON & SPA — ivy green */}
        <text
          x="110"
          y="132"
          textAnchor="middle"
          fill="#B8934A"
          fontFamily="Prompt, sans-serif"
          fontSize="10"
          letterSpacing="3.5"
        >
          SALON &amp; SPA
        </text>
      </svg>
    </div>
  );
}