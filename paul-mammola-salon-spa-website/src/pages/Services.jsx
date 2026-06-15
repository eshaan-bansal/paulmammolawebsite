import React from "react";

const BOOKING_URL = "https://paulmammolasalonandspa.salontarget.com";

const btnStyle = {
  fontFamily: "'Jost', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  fontSize: "12px",
  border: "1px solid #F2EDE6",
  color: "#F2EDE6",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "16px 0",
  width: "280px",
};

const SERVICES = [
  {
    label: "HAIR",
    description: "From precision cuts and blowouts to balayage, highlights, color, keratin treatments, and extensions — our stylists are dedicated to your hair health and the look you love.",
    btn: "BOOK HAIR SERVICES",
    bg: "#0A0A0A",
  },
  {
    label: "NAILS",
    description: "Classic and gel manicures, pedicures, Dazzle Dry, express and deluxe options — professional nail services by Lee and Marketa.",
    btn: "BOOK NAIL SERVICES",
    bg: "#1A120A",
  },
  {
    label: "SPA",
    description: "Rejuvenating facials, full-body waxing, and body treatments by Marketa. From express options to the ultimate facial — a complete spa experience in Lexington.",
    btn: "BOOK SPA SERVICES",
    bg: "#0A0A0A",
  },
];

export default function Services() {
  return (
    <div className="m-0 p-0" style={{ backgroundColor: "#0A0A0A" }}>
      <h1 className="hidden-seo">Hair and Spa Services in Lexington MA — Paul Mammola Salon and Spa</h1>

      {/* HEADER */}
      <section className="flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: "160px", paddingBottom: "60px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
          OUR SERVICES
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "12px", color: "#B8934A", marginTop: "16px" }}>
          Expert hair, nail, and spa services in Lexington, MA
        </p>
      </section>

      {/* SERVICE SECTIONS */}
      {SERVICES.map((svc) => (
        <section key={svc.label} className="px-6" style={{ backgroundColor: svc.bg, paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="max-w-[680px] mx-auto text-center">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
              {svc.label}
            </h2>
            <div className="mt-4 mx-auto" style={{ width: "50px", height: "1px", backgroundColor: "#B8934A" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", fontWeight: 300, color: "#D4CFC8", lineHeight: 1.85, marginTop: "24px" }}>
              {svc.description}
            </p>
            <div className="mt-8 flex justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={btnStyle}>
                {svc.btn}
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* PRICING NOTE */}
      <section style={{ backgroundColor: "#1A120A", paddingTop: "40px", paddingBottom: "80px" }}>
        <p className="text-center" style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", fontWeight: 300, color: "#9E9488", letterSpacing: "0.05em" }}>
          Pricing varies by service and stylist. Please call (781) 861-9055 or book online to confirm pricing.
        </p>
      </section>
    </div>
  );
}