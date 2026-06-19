import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "MEET THE TEAM", path: "/team" },
  { label: "EMPLOYMENT", path: "/employment" },
  { label: "CONTACT", path: "/contact" },
  { label: "E-GIFT CARDS", path: "https://paulmammolasalonandspa.salontarget.com/egift/?guestonly=guestonly", external: true },
];

const FB_SVG = <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const IG_SVG = <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "#0A0A0A" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="w-full flex items-center justify-between" style={{ height: "80px", paddingLeft: "32px", paddingRight: "32px" }}>
          {/* Wordmark */}
          <Link to="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "20px", letterSpacing: "0.08em", color: "#F2EDE6", textDecoration: "none" }}>
            Paul Mammola
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", color: "#F2EDE6", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontSize: "12px",
                    color: isActive(link.path) ? "#B8934A" : "#F2EDE6",
                    textDecoration: "none",
                    borderBottom: isActive(link.path) ? "2px solid #B8934A" : "2px solid transparent",
                    paddingBottom: "2px",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Social icons + Book button — desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://www.facebook.com/PaulMammolaSalon/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity" style={{ color: "#F2EDE6" }}>
              {FB_SVG}
            </a>
            <a href="https://instagram.com/paulmammolasalonandspa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity" style={{ color: "#F2EDE6" }}>
              {IG_SVG}
            </a>
            <a href="https://paulmammolasalonandspa.salontarget.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "11px", border: "1px solid #F2EDE6", color: "#F2EDE6", textDecoration: "none", padding: "8px 18px", marginLeft: "8px" }}>
              BOOK APPOINTMENT
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#F2EDE6" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ backgroundColor: "#0A0A0A" }}>
          <button
            className="absolute top-6 right-6 p-2"
            style={{ color: "#F2EDE6" }}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Jost', sans-serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "14px", color: "#F2EDE6", textDecoration: "none" }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "14px",
                  color: isActive(link.path) ? "#B8934A" : "#F2EDE6",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.facebook.com/PaulMammolaSalon/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#F2EDE6" }}>
              {FB_SVG}
            </a>
            <a href="https://instagram.com/paulmammolasalonandspa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#F2EDE6" }}>
              {IG_SVG}
            </a>
          </div>
        </div>
      )}
    </>
  );
}