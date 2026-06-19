import React from "react";

const BOOKING_URL = "https://paulmammolasalonandspa.salontarget.com";

const STYLISTS = [
{ name: "Marketa", role: "MASTER ESTHETICIAN", bio: "With over 25 years of experience, Marketa is a true master of her craft, specializing in facials, waxing, manicures, and pedicures. Known for her gentle touch and attention to detail, Marketa creates a welcoming environment where every client can feel relaxed and recharged.", img: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/396c8a92c_image1.jpg", imgStyle: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" } },
{ name: "Dahab", role: "MASTER STYLIST", bio: "With over 20 years of experience, Dahab brings creativity and precision to every appointment. Her extensive training spans advanced cutting, extensions, and color correction, ensuring every client leaves looking and feeling their best.", img: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/0a137060d_image2.jpg", imgStyle: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" } },
{ name: "Kesa", role: "MASTER STYLIST", bio: "With over 17 years of experience, Kesa combines technical expertise with personalized consultation. Specializing in haircuts and color, she ensures every guest leaves feeling confident and refreshed.", img: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/469493927_image20.jpg", imgStyle: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" } },
{ name: "Ela", role: "STYLIST", bio: "Ela is a skilled stylist with a passion for helping clients achieve looks that enhance their natural beauty and suit their lifestyle. She also specializes in updos for special events.", img: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/defe02dd9_image18.jpg", imgStyle: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" } },
{ name: "Aneesa", role: "ASSISTANT STYLIST", bio: "Aneesa is passionate about helping clients look and feel their best, bringing dedication and enthusiasm to every guest experience as she continues to grow her craft.", img: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/c5739a594_istockphoto-1162622561-612x612.jpg", imgStyle: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" } },
{ name: "Le", role: "MASTER NAIL TECH", bio: "With over 20 years of experience, Le is dedicated to delivering exceptional nail care with a meticulous, detail-oriented approach. Her goal is simple: healthy, beautiful nails for every client.", img: "https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/5757621c4_two-women-are-pampering-their-nails-during-a-manicure-session-a-stylist-carefully-applies-blue-polish-while-candles-create-a-serene-ambiance-enhancing-the-salon-experience-photo.jpg", imgStyle: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" } }];


const btnStyle = { fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", border: "1px solid #F2EDE6", color: "#F2EDE6", textDecoration: "none", textAlign: "center", display: "inline-block", padding: "16px 0" };

export default function Team() {
  return (
    <div className="m-0 p-0" style={{ backgroundColor: "#0A0A0A" }}>
      <h1 className="hidden-seo">Meet Our Team — Paul Mammola Salon and Spa Lexington MA</h1>
      {/* SECTION 1 — HEADER */}
      <section className="flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: "110px", paddingBottom: "40px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
          MEET THE TEAM
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "12px", color: "#B8934A", marginTop: "12px" }}>
          THE PEOPLE WHO MAKE THIS PLACE HOME
        </p>
      </section>

      {/* SECTION 2 — OWNER FEATURE */}
      <section className="m-0 p-0" style={{ backgroundColor: "#1A120A" }}>
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
          <div className="overflow-hidden flex-shrink-0 relative" style={{ width: "220px", height: "293px" }}>
            <img src="https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/f67881fc5_image5.jpg" alt="chau-pham-owner-paul-mammola-salon-lexington-ma" className="absolute" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>

          <div className="flex flex-col justify-center">
            <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "11px", color: "#B8934A" }}>OWNER</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 400, marginTop: "8px" }}>
              Chau T. Pham
            </h2>
            <div className="mt-3 mb-4" style={{ width: "40px", height: "2px", backgroundColor: "#B8934A" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", fontWeight: 300, color: "#D4CFC8", lineHeight: 1.8, maxWidth: "520px" }}>
              Chau is the proud owner of Paul Mammola Salon and Spa. She is happily married to Tommy Pham and is a proud mother of three. Growing up, her mother always emphasized that looking your best is a form of confidence — a belief Chau has carried into everything she does in this industry. Her greatest joy is making people feel like the very best version of themselves.
            </p>
            <p className="mt-4 italic" style={{ fontFamily: "'Jost', sans-serif", color: "#B8934A", fontSize: "14px" }}>
              &ldquo;This space was made for you.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2B — FOUNDER FEATURE */}
      <section className="m-0 p-0" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex flex-col justify-center" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "11px", color: "#B8934A" }}>FOUNDER</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 400, marginTop: "8px" }}>
              Paul Mammola
            </h2>
            <div className="mt-3 mb-4" style={{ width: "40px", height: "2px", backgroundColor: "#B8934A" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", fontWeight: 300, color: "#D4CFC8", lineHeight: 1.8, maxWidth: "520px" }}>
              With over 50+ years behind the chair, Paul Mammola founded the salon in 1970 and built it into a Lexington keepsake. Today, Paul continues to do what he loves most — cutting hair and connecting with the community he has served for over five decades.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — STYLIST GRID */}
      <section className="m-0 p-0" style={{ backgroundColor: "#0A0A0A", paddingTop: "40px", paddingBottom: "80px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center mb-14">
            <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "11px", color: "#B8934A" }}>OUR STYLISTS</p>
            <div className="mt-4" style={{ width: "50px", height: "1px", backgroundColor: "#B8934A" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {STYLISTS.map((stylist) =>
            <div key={stylist.name} className="flex flex-col items-center text-center">
                <div className="w-full overflow-hidden relative" style={{ aspectRatio: "3/4" }}>
                  <img
                  src={stylist.img}
                  alt={`${stylist.name.toLowerCase().replace(/[.\s]/g, '-')}-stylist-paul-mammola-salon-lexington-ma`}
                  className="absolute"
                  loading="lazy"
                  style={stylist.imgStyle} />
                
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", color: "#F2EDE6", letterSpacing: "0.05em", fontWeight: 400, marginTop: "20px" }}>
                  {stylist.name}
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "11px", color: "#B8934A", marginTop: "4px" }}>{stylist.role}</p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "15px", fontWeight: 300, color: "#D4CFC8", lineHeight: 1.8, maxWidth: "280px", marginTop: "12px" }}>
                  {stylist.bio}
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-14">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ ...btnStyle, width: "296px" }}>
              BOOK NOW
            </a>
          </div>
        </div>
      </section>
    </div>);

}