import React from "react";

const BANNER_IMG = "/about-salon-bw.png";

export default function About() {
  return (
    <div className="m-0 p-0" style={{ backgroundColor: "#0A0A0A" }}>
      <h1 className="hidden-seo">About Paul Mammola Salon and Spa — Lexington MA Since 1970</h1>
      {/* SECTION 1 — HEADER */}
      <section className="flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: "160px", paddingBottom: "80px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
          PAUL MAMMOLA SALON
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "12px", color: "#B8934A", marginTop: "16px" }}>
          THAT FEELS LIKE HOME
        </p>
      </section>

      {/* SECTION 2 — FULL-WIDTH PHOTO */}
      <div style={{ width: "100%", height: "420px", overflow: "hidden" }}>
        <img
          src={BANNER_IMG}
          alt="paul-mammola-salon-stylist-lexington-ma"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%", display: "block", filter: "none" }}
        />
      </div>

      {/* SECTION 3 — A NOTE FROM CHAU */}
      <section className="px-6" style={{ backgroundColor: "#0A0A0A", paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "680px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 400 }}>
            A NOTE FROM CHAU
          </h2>

          <div style={{ marginTop: "32px" }}>
            {[
              "I am so glad you are here. Writing about myself is not something that comes naturally to me — but I will give this my best effort, because you deserve to know who is behind this salon.",
              "I grew up watching my mother take pride in her appearance, not out of vanity, but out of self-respect. She always said that when you look your best, you feel your best — and that belief has never left me. It is why I fell in love with this industry, and why I became an owner.",
              "Over time I came to understand what this work is really about. It is not about appearances. It is about presence. It is about holding space for the everyday moments and the milestone ones — the first big event, the fresh start, the quiet hour someone carved out just for themselves. The transformation that happens in that chair goes far beyond the mirror.",
              "This is my calling. Paul Mammola Salon has been part of Lexington since 1970, and I am honored to carry that legacy forward. I have built a team of people who share that same belief — that great service starts with genuinely caring about the person in front of you.",
              "So welcome. Come sit in our chair. Stay a while.",
            ].map((text, i, arr) => (
              // Rendered as <div> (not <p>) to keep Safari Reader View from
              // auto-detecting this prose as an article and hijacking the page.
              <div key={i} style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", fontWeight: 300, color: "#D4CFC8", lineHeight: 1.9, marginBottom: i < arr.length - 1 ? "24px" : 0 }}>
                {text}
              </div>
            ))}
          </div>

          <div style={{ fontFamily: "'Jost', sans-serif", fontStyle: "italic", fontSize: "16px", color: "#B8934A", marginTop: "32px" }}>
            — Chau T. Pham, Owner
          </div>
        </div>
      </section>
    </div>
  );
}