import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS keys are public client-side values (they ship in the browser bundle),
// so inline defaults are used as a fallback when env vars aren't configured.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_bj55np4";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_20xdkkq";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "11rPjOomH3m8tcvjV";

const POSITIONS = ["Hair Stylist", "Nail Technician", "Esthetician", "Front Desk", "Other"];

const inputStyle = { border: "1px solid rgba(255,255,255,0.15)", borderRadius: 0, fontFamily: "'Jost', sans-serif", fontSize: "15px", fontWeight: 300, backgroundColor: "transparent", color: "#F2EDE6" };
const labelStyle = { fontFamily: "'Jost', sans-serif", color: "#9E9488", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.15em" };

function FormField({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block mb-2" style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 focus:outline-none transition-colors"
        style={inputStyle}
        onFocus={(e) => e.target.style.borderColor = "#B8934A"}
        onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
      />
    </div>
  );
}

export default function Employment() {
  const hidden = <h1 className="hidden-seo">Salon Jobs in Lexington MA — Paul Mammola Salon and Spa</h1>;
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", position: "", experience: "", hasClientList: null, about: "" });

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.fullName,
          from_email: form.email,
          phone: form.phone,
          position: form.position,
          experience: form.experience,
          client_list: form.hasClientList === true ? "Yes" : form.hasClientList === false ? "No" : "Not specified",
          message: form.about,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setError("Something went wrong sending your application. Please try again, or email us directly at pmsandsb@gmail.com.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="m-0 p-0" style={{ backgroundColor: "#0A0A0A" }}>
      {hidden}
      {/* SECTION 1 — HEADER + PHOTO */}
      <section className="flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: "110px", paddingBottom: "40px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
          JOIN OUR TEAM
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "12px", color: "#B8934A", marginTop: "12px" }}>
          BUILD YOUR CAREER IN LEXINGTON, MA
        </p>
        <div style={{ marginTop: "32px", width: "100%", maxWidth: "680px", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/808172342_image.png" alt="paul-mammola-salon-team-lexington-ma" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </section>

      {/* SECTION 2 — APPLICATION FORM */}
      <section className="px-6" style={{ backgroundColor: "#0A0A0A", paddingTop: "60px", paddingBottom: "80px" }}>
        <div className="max-w-[680px] mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", color: "#B8934A", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
                THANK YOU
              </h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "16px", color: "#D4CFC8", lineHeight: 1.8, marginTop: "24px" }}>
                We&apos;ve received your application and will be in touch soon. In the meantime, follow along at{" "}
                <a href="https://instagram.com/paulmammolasalonandspa" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#B8934A" }}>
                  @paulmammolasalonandspa
                </a>.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", color: "#F2EDE6", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 400 }}>
                  GET IN TOUCH
                </h2>
                <div className="mt-5 mx-auto" style={{ width: "50px", height: "1px", backgroundColor: "#B8934A" }} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField label="FULL NAME" value={form.fullName} onChange={(v) => handleChange("fullName", v)} type="text" required />
                <FormField label="EMAIL ADDRESS" value={form.email} onChange={(v) => handleChange("email", v)} type="email" required />
                <FormField label="PHONE NUMBER" value={form.phone} onChange={(v) => handleChange("phone", v)} type="tel" required />

                <div>
                  <label className="block mb-2" style={labelStyle}>POSITION APPLYING FOR</label>
                  <select
                    value={form.position}
                    onChange={(e) => handleChange("position", e.target.value)}
                    required
                    className="w-full px-4 py-3 focus:outline-none transition-colors"
                    style={{ ...inputStyle, appearance: "none" }}
                    onFocus={(e) => e.target.style.borderColor = "#B8934A"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                  >
                    <option value="" disabled style={{ backgroundColor: "#0A0A0A" }}>Select a position</option>
                    {POSITIONS.map((p) => (
                      <option key={p} value={p} style={{ backgroundColor: "#0A0A0A" }}>{p}</option>
                    ))}
                  </select>
                </div>

                <FormField label="YEARS OF EXPERIENCE" value={form.experience} onChange={(v) => handleChange("experience", v)} type="number" />

                <div>
                  <label className="block mb-3" style={labelStyle}>DO YOU HAVE AN EXISTING CLIENT LIST?</label>
                  <div className="flex gap-3">
                    {[true, false].map((val) => (
                      <button
                        key={String(val)}
                        type="button"
                        onClick={() => handleChange("hasClientList", val)}
                        className="px-8 py-3 transition-all"
                        style={{
                          fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: "0.15em", borderRadius: 0, color: "#F2EDE6",
                          border: form.hasClientList === val ? "1px solid #B8934A" : "1px solid rgba(255,255,255,0.15)",
                          backgroundColor: form.hasClientList === val ? "rgba(184,147,74,0.15)" : "transparent"
                        }}
                      >
                        {val ? "YES" : "NO"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2" style={labelStyle}>TELL US ABOUT YOURSELF AND WHY YOU&apos;D BE A GREAT FIT</label>
                  <textarea
                    value={form.about}
                    onChange={(e) => handleChange("about", e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 resize-none focus:outline-none transition-colors"
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = "#B8934A"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                  />
                </div>

                {error && (
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "14px", color: "#E07A5F", lineHeight: 1.6 }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  style={{ width: "100%", padding: "16px 0", fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", border: "1px solid #F2EDE6", color: "#F2EDE6", backgroundColor: "transparent", cursor: sending ? "not-allowed" : "pointer", opacity: sending ? 0.5 : 1 }}
                >
                  {sending ? "SENDING..." : "SUBMIT APPLICATION"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}