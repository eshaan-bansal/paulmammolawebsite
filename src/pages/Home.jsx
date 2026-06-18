import React from "react";
import PMBadge from "../components/PMBadge";
import PMSwirl from "../components/PMSwirl";

const BOOKING_URL = "https://paulmammolasalonandspa.salontarget.com";
const EGIFT_URL = "https://paulmammolasalonandspa.salontarget.com/egift/?guestonly=guestonly";

const HERO_IMG = "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/054b0390d_image24.png";
const AMBIENT_IMG = "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/9db13d4cf_image23.png";
const WIDE_IMG = "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/8392bc15e_image16.png";

// COLLAGE IMAGES
const COLLAGE_TOP_ROW = [
  { src: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/489577a56_image351.png", alt: "balayage-highlights-wavy-hair-paul-mammola-salon-lexington-ma" },
  { src: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/35014ab1d_image341.png", alt: "balayage-highlights-paul-mammola-salon-lexington-ma" },
  { src: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/da25e88ea_image311.png", alt: "silver-lavender-hair-color-paul-mammola-salon-lexington-ma" },
];
const COLLAGE_BOTTOM_ROW = [
  { src: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/2f47863dc_pexels-svliiim-34997561.jpg", alt: "nail-services-paul-mammola-salon-lexington-ma" },
  { src: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/ad09688f3_pexels-davegarcia-37229307.jpg", alt: "spa-facial-mask-paul-mammola-salon-lexington-ma" },
];

const btnStyle = { fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", border: "1px solid #F2EDE6", color: "#F2EDE6", textDecoration: "none", textAlign: "center", display: "inline-block", padding: "16px 0" };

export default function Home() {
  return (
    <div className="m-0 p-0" style={{ backgroundColor: "#0A0A0A" }}>

      <h1 className="hidden-seo">Hair Salon in Lexington MA — Paul Mammola Salon and Spa</h1>
      {/* SECTION 1 — HERO */}
      <section className="relative w-full m-0 p-0" style={{ height: "100vh", minHeight: "700px" }}>
        <img src={HERO_IMG} alt="paul-mammola-salon-interior-lexington-ma" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "220px", background: "linear-gradient(to top, #0A0A0A, transparent)", zIndex: 2 }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <PMBadge size={264} />
          <p className="mt-8 text-center" style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.25em" }}>
            THE SALON THAT FEELS LIKE HOME
          </p>
          <p className="text-center mt-5" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "16px", color: "#F2EDE6", lineHeight: 1.7, maxWidth: "500px", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            Welcome to Paul Mammola Salon, a space made just for you.<br />
            Located in the heart of Lexington, MA at<br />
            1787 Massachusetts Avenue.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-10" style={{ ...btnStyle, width: "300px" }}>
            BOOK YOUR APPOINTMENT
          </a>
        </div>

        <div className="absolute left-1/2 z-10" style={{ bottom: "-35px", transform: "translateX(-50%)" }}>
          <PMBadge size={70} />
        </div>
      </section>

      {/* SECTION 2 — PAUL MAMMOLA SALON */}
      <section className="relative w-full m-0 p-0" style={{ minHeight: "600px" }}>
        <img src={AMBIENT_IMG} alt="paul-mammola-salon-and-spa-lexington-massachusetts" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.94) 40%, rgba(10,10,10,0.6) 65%, rgba(10,10,10,0.1) 100%)" }} />
        <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "220px", background: "linear-gradient(to bottom, #0A0A0A, transparent)", zIndex: 2 }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "220px", background: "linear-gradient(to top, #0A0A0A, transparent)", zIndex: 2 }} />

        <div className="relative z-10 flex items-center min-h-[600px] px-6 lg:px-0" style={{ paddingLeft: "8%" }}>
          <div className="max-w-lg py-24">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
              PAUL MAMMOLA SALON
            </h2>
            <div className="mt-5 mb-6" style={{ width: "40px", height: "1px", backgroundColor: "#B8934A" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "16px", color: "#D4CFC8", lineHeight: 1.8 }}>
              Paul Mammola Salon is a place where people come to take care of themselves — and stay because they feel at home. We believe that when you put people first, great service follows naturally. Every detail of the Paul Mammola experience, from the warmth of our team to the care we put into our craft, is designed to ensure you walk away feeling refreshed, confident, and cared for.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-8" style={{ ...btnStyle, width: "296px" }}>
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE LOVE MOST */}
      <section className="m-0 p-0" style={{ backgroundColor: "#0A0A0A", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", color: "#F2EDE6", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400, textAlign: "center" }}>
            WHAT WE LOVE MOST
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
           {[
             { icon: "#B8934A", label: "HAIR", body: "We are a full-service salon offering hair services for every guest. We specialize in hair health, dimensional color, balayage, and extensions." },
             { icon: "#B8934A", label: "CARE", body: "Our team of specialists provides nail services, rejuvenating facials, and full-body waxing — everything you need to feel completely restored." },
             { icon: "#B8934A", label: "COMMUNITY", body: "Our space has served as a gathering place for Lexington since 1970. Where clients become regulars, and regulars become family." },
           ].map(({ icon, label, body }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <PMSwirl size={60} color={icon} />
                <h3 style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", fontWeight: 500, color: "#F2EDE6", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "24px" }}>{label}</h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "15px", color: "#D4CFC8", lineHeight: 1.8, maxWidth: "280px", marginTop: "16px" }}>{body}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ ...btnStyle, width: "296px" }}>
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PHOTO COLLAGE */}
      <section className="relative w-full m-0 p-0">
        <img src={WIDE_IMG} alt="paul-mammola-salon-lexington-ma-interior-gallery" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(1.35) saturate(1.2)" }} />
        <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: "120px", background: "linear-gradient(to bottom, #0A0A0A, transparent)", zIndex: 2 }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "120px", background: "linear-gradient(to top, #1A120A, transparent)", zIndex: 2 }} />
        <div className="relative z-10 px-6 py-12 max-w-5xl mx-auto hidden md:block">
          <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
            {COLLAGE_TOP_ROW.map((img, i) => (
              <div key={i} style={{ flex: 1, border: "2px solid #0A0A0A", overflow: "hidden" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} loading="lazy" />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            {COLLAGE_BOTTOM_ROW.map((img, i) => (
              <div key={i} style={{ width: "calc((100% - 24px) / 3)", border: "2px solid #0A0A0A", overflow: "hidden" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — TAKE YOUR SEAT */}
      <section className="m-0 p-0" style={{ backgroundColor: "#1A120A" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
            TAKE YOUR SEAT
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "12px", color: "#B8934A", marginTop: "16px" }}>
            BOOKING &amp; AVAILABILITY
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "16px", color: "#D4CFC8", lineHeight: 1.8, marginTop: "24px" }}>
            At Paul Mammola Salon, we welcome all hair types and all walks of life. Our talented team is here to provide you with exceptional service — whether you are coming in for a fresh cut, a full color transformation, or a relaxing spa treatment.
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "16px", color: "#D4CFC8", lineHeight: 1.8, marginTop: "16px" }}>
            We are open Tuesday through Saturday and operate by appointment. Please use our online booking system to view availability and schedule your visit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ ...btnStyle, width: "240px" }}>BOOK NOW</a>
            <a href={EGIFT_URL} target="_blank" rel="noopener noreferrer" style={{ ...btnStyle, width: "240px" }}>E-GIFT CARDS</a>
          </div>

          <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "15px", color: "#9E9488", lineHeight: 2, marginTop: "48px" }}>
            <p>Tuesday – Thursday: 10:00am – 8:00pm</p>
            <p>Friday: 9:30am – 5:30pm</p>
            <p>Saturday: 9:00am – 5:00pm</p>
            <p>Sunday &amp; Monday: Closed</p>
          </div>
        </div>
      </section>
    </div>
  );
}