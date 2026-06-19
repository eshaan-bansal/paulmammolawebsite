import React from "react";

const BOOKING_URL = "https://paulmammolasalonandspa.salontarget.com";
const MAPS_URL = "https://maps.google.com/?q=1787+Massachusetts+Avenue,+Lexington,+MA+02420";

const labelStyle = { fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "11px", fontWeight: 500, color: "#B8934A", marginBottom: "10px", display: "block" };
const valueStyle = { fontFamily: "'Jost', sans-serif", fontSize: "17px", fontWeight: 300, color: "#F2EDE6", lineHeight: 1.7, textDecoration: "none" };

function ContactBlock({ label, children }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span style={labelStyle}>{label}</span>
      {children}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="m-0 p-0" style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}>
      <h1 className="hidden-seo">Contact Paul Mammola Salon and Spa — Lexington MA · Call (781) 861-9055</h1>

      {/* SECTION 1 — HEADER */}
      <section className="flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: "160px", paddingBottom: "40px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
          CONTACT US
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "12px", color: "#B8934A", marginTop: "16px" }}>
          WE&apos;D LOVE TO HEAR FROM YOU
        </p>
        <div className="mt-6" style={{ width: "50px", height: "1px", backgroundColor: "#B8934A" }} />
      </section>

      {/* SECTION 2 — CONTACT DETAILS */}
      <section className="px-6" style={{ paddingTop: "40px", paddingBottom: "100px" }}>
        <div className="max-w-2xl mx-auto flex flex-col gap-12">

          <ContactBlock label="Call Us">
            <a href="tel:+17818619055" style={{ ...valueStyle, fontSize: "22px", letterSpacing: "0.04em" }} className="hover:opacity-70 transition-opacity">
              (781) 861-9055
            </a>
            <a href="tel:+17818624833" style={{ ...valueStyle, marginTop: "6px" }} className="hover:opacity-70 transition-opacity">
              (781) 862-4833
            </a>
          </ContactBlock>

          <ContactBlock label="Email Us">
            <a href="mailto:pmsandsb@gmail.com" style={valueStyle} className="hover:opacity-70 transition-opacity">
              pmsandsb@gmail.com
            </a>
          </ContactBlock>

          <ContactBlock label="Visit Us">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={valueStyle} className="hover:opacity-70 transition-opacity">
              1787 Massachusetts Avenue
              <br />
              Lexington, MA 02420
            </a>
          </ContactBlock>

          <ContactBlock label="Hours">
            <div style={{ ...valueStyle, fontSize: "15px" }}>
              <div>Tuesday – Thursday: 10:00am – 8:00pm</div>
              <div>Friday: 9:30am – 5:30pm</div>
              <div>Saturday: 9:00am – 5:00pm</div>
              <div>Sunday &amp; Monday: Closed</div>
            </div>
          </ContactBlock>

          <div className="flex justify-center mt-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", border: "1px solid #F2EDE6", color: "#F2EDE6", textDecoration: "none", textAlign: "center", padding: "16px 0", width: "296px" }}
              className="hover:opacity-70 transition-opacity"
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
