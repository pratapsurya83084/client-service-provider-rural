import { useState, useEffect } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "Services", "How It Works", "About", "Contact"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const checkScroll = () => setScrolled(window.scrollY > 10);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(255,255,255,0.97)"
            : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(18px)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(37,99,235,0.12)"
            : "0 2px 12px rgba(37,99,235,0.06)",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          transition: "box-shadow 0.3s, background 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: isMobile ? "0 16px" : "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: isMobile ? "60px" : "70px",
          }}
        >
          {/* ── Logo ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "9px", flexShrink: 0 }}>
            <div
              style={{
                width: isMobile ? "34px" : "40px",
                height: isMobile ? "34px" : "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "1.1rem" : "1.3rem",
                boxShadow: "0 4px 14px rgba(37,99,235,0.30)",
                flexShrink: 0,
              }}
            >
              🌾
            </div>
            <span
              style={{
                fontSize: isMobile ? "1.4rem" : "1.7rem",
                fontWeight: "800",
                letterSpacing: "-0.5px",
                background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}
            >
              Kannect
            </span>
          </div>

          {/* ── Desktop Nav Links ── */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveLink(link)}
                  style={{
                    position: "relative",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: activeLink === link ? "700" : "500",
                    background:
                      activeLink === link
                        ? "linear-gradient(135deg, #eff6ff, #dbeafe)"
                        : "transparent",
                    color: activeLink === link ? "#2563eb" : "#4b5563",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (activeLink !== link) {
                      e.currentTarget.style.background = "#f8fafc";
                      e.currentTarget.style.color = "#2563eb";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeLink !== link) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#4b5563";
                    }
                  }}
                >
                  {link}
                  {activeLink === link && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "16px",
                        height: "2.5px",
                        borderRadius: "2px",
                        background: "linear-gradient(90deg, #2563eb, #3b82f6)",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* ── Desktop CTA Buttons ── */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
              <button
                style={{
                  padding: "9px 20px",
                  borderRadius: "9px",
                  border: "2px solid #3b82f6",
                  cursor: "pointer",
                  fontSize: "0.88rem",
                  fontWeight: "600",
                  background: "transparent",
                  color: "#2563eb",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#eff6ff")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Sign In
              </button>
              <button
                style={{
                  padding: "9px 20px",
                  borderRadius: "9px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.88rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.28)",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(37,99,235,0.38)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,99,235,0.28)";
                }}
              >
                Get Started 🚀
              </button>
            </div>
          )}

          {/* ── Mobile: Sign In + Hamburger ── */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                style={{
                  padding: "7px 14px",
                  borderRadius: "8px",
                  border: "2px solid #3b82f6",
                  cursor: "pointer",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                  background: "transparent",
                  color: "#2563eb",
                }}
              >
                Sign In
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                  background: menuOpen ? "#eff6ff" : "transparent",
                  border: "2px solid #e5e7eb",
                  cursor: "pointer",
                  padding: "7px",
                  borderRadius: "9px",
                  width: "38px",
                  height: "38px",
                  transition: "background 0.2s",
                }}
                aria-label="Toggle menu"
              >
                <span
                  style={{
                    display: "block",
                    width: "18px",
                    height: "2px",
                    borderRadius: "2px",
                    background: "#2563eb",
                    transition: "transform 0.3s, opacity 0.3s",
                    transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "18px",
                    height: "2px",
                    borderRadius: "2px",
                    background: "#2563eb",
                    transition: "opacity 0.3s",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: "18px",
                    height: "2px",
                    borderRadius: "2px",
                    background: "#2563eb",
                    transition: "transform 0.3s, opacity 0.3s",
                    transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
                  }}
                />
              </button>
            </div>
          )}
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        {isMobile && (
          <div
            style={{
              overflow: "hidden",
              maxHeight: menuOpen ? "500px" : "0px",
              transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
              background: "rgba(255,255,255,0.99)",
              borderTop: menuOpen ? "1px solid #e5e7eb" : "none",
            }}
          >
            <div style={{ padding: "12px 16px 20px" }}>
              {/* Nav Links */}
              {navLinks.map((link, idx) => (
                <button
                  key={link}
                  onClick={() => {
                    setActiveLink(link);
                    setMenuOpen(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    textAlign: "left",
                    padding: "13px 16px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    fontWeight: activeLink === link ? "700" : "500",
                    background:
                      activeLink === link
                        ? "linear-gradient(135deg, #eff6ff, #dbeafe)"
                        : "transparent",
                    color: activeLink === link ? "#2563eb" : "#374151",
                    marginBottom: "4px",
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span>
                      {["🏠", "🛠️", "📋", "🌾", "📞"][idx]}
                    </span>
                    {link}
                  </span>
                  {activeLink === link && (
                    <span style={{
                      width: "8px", height: "8px", borderRadius: "50%",
                      background: "#3b82f6"
                    }} />
                  )}
                </button>
              ))}

              {/* Divider */}
              <div style={{
                height: "1px", background: "#e5e7eb",
                margin: "12px 0"
              }} />

              {/* Get Started full width */}
              <button
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.28)",
                  letterSpacing: "0.02em",
                }}
              >
                Get Started 🚀
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div style={{ height: isMobile ? "60px" : "70px" }} />
    </>
  );
};

export default NavBar;