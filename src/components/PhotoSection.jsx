import React from "react";

export default function PhotoSection({ src, alt, dataSlot, height = "400px", children, className = "" }) {
  return (
    <div className={`relative w-full m-0 p-0 ${className}`} style={{ height }}>
      <img
        src={src}
        alt={alt}
        data-slot={dataSlot}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: "220px", background: "linear-gradient(to bottom, #080808, transparent)", zIndex: 2 }}
      />
      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "220px", background: "linear-gradient(to top, #080808, transparent)", zIndex: 2 }}
      />
      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  );
}