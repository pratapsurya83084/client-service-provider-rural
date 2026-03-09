import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "500+", label: "Farmers Served", icon: "👨‍🌾" },
    { value: "50+", label: "Service Providers", icon: "🛠️" },
    { value: "20+", label: "Villages Covered", icon: "🏘️" },
  ];

  const floatingCards = [
    { icon: "🚜", title: "Tractor Rental", desc: "Available Now", color: "#2563eb", top: "18%", left: "2%", delay: "0s" },
    { icon: "💧", title: "Irrigation", desc: "3 Providers", color: "#3b82f6", top: "58%", left: "2%", delay: "0.5s" },
    { icon: "🌱", title: "Soil Testing", desc: "Book Today", color: "#1d4ed8", top: "18%", right: "2%", delay: "0.25s" },
    { icon: "🐄", title: "Veterinary", desc: "On-Call", color: "#60a5fa", top: "58%", right: "2%", delay: "0.75s" },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: isMobile ? "100svh" : "100vh",
        overflow: "hidden",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // Same base as login/signup/navbar
        background: "linear-gradient(145deg, #e8eef7 0%, #d5e3f5 40%, #c8d8f0 75%, #dbeafe 100%)",
      }}
    >

      {/* ── Decorative Blobs (matches login/signup) ── */}
      <div style={{
        position: "absolute",
        top: "-120px", right: "-100px",
        width: isMobile ? "300px" : "520px",
        height: isMobile ? "300px" : "520px",
        borderRadius: "50%",
        background: "rgba(100,160,255,0.18)",
        filter: "blur(60px)",
        zIndex: 0,
        animation: "blobPulse 5s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-80px", left: "-80px",
        width: isMobile ? "260px" : "440px",
        height: isMobile ? "260px" : "440px",
        borderRadius: "50%",
        background: "rgba(80,140,255,0.14)",
        filter: "blur(50px)",
        zIndex: 0,
        animation: "blobPulse 7s ease-in-out infinite reverse",
      }} />
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: isMobile ? "200px" : "360px",
        height: isMobile ? "200px" : "360px",
        borderRadius: "50%",
        background: "rgba(37,99,235,0.07)",
        filter: "blur(70px)",
        zIndex: 0,
        animation: "blobPulse 6s ease-in-out infinite",
      }} />

      {/* ── Subtle Dot Grid ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* ── Floating Service Cards (Desktop) ── */}
      {!isMobile && floatingCards.map((card, i) => (
        <div key={i} style={{
          position: "absolute",
          top: card.top,
          left: card.left,
          right: card.right,
          zIndex: 3,
          background: "rgba(255,255,255,0.80)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.95)",
          borderRadius: "14px",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          animation: `floatCard 3.5s ease-in-out infinite`,
          animationDelay: card.delay,
          minWidth: "158px",
          boxShadow: "0 4px 20px rgba(37,99,235,0.10)",
        }}>
          <div style={{
            width: "38px", height: "38px", borderRadius: "10px",
            background: `linear-gradient(135deg, #eff6ff, #dbeafe)`,
            border: `1px solid #bfdbfe`,
            display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "1.15rem", flexShrink: 0,
          }}>
            {card.icon}
          </div>
          <div>
            <div style={{ color: "#1e3a8a", fontSize: "0.82rem", fontWeight: "700", lineHeight: 1.2 }}>
              {card.title}
            </div>
            <div style={{ color: "#3b82f6", fontSize: "0.72rem", fontWeight: "600", marginTop: "2px" }}>
              {card.desc}
            </div>
          </div>
        </div>
      ))}

      {/* ── Main Content ── */}
      <div style={{
        position: "relative", zIndex: 4,
        maxWidth: "820px",
        margin: "0 auto",
        padding: isMobile
          ? "90px 20px 36px"
          : isTablet
          ? "90px 48px 56px"
          : "90px 24px 56px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: isMobile ? "20px" : "26px",
        width: "100%",
        boxSizing: "border-box",
      }}>

        {/* Live Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(37,99,235,0.20)",
          borderRadius: "100px",
          padding: isMobile ? "7px 16px" : "8px 20px",
          boxShadow: "0 2px 12px rgba(37,99,235,0.10)",
          animation: "fadeSlideDown 0.6s ease forwards",
        }}>
          <span style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "#3b82f6",
            boxShadow: "0 0 8px rgba(59,130,246,0.7)",
            display: "inline-block",
            animation: "blink 1.6s ease-in-out infinite",
          }} />
          <span style={{
            color: "#2563eb",
            fontSize: isMobile ? "0.75rem" : "0.82rem",
            fontWeight: "600",
            letterSpacing: "0.03em",
          }}>
            🌾 Rural Service Marketplace — Now Live
          </span>
        </div>

        {/* Headline */}
        <div style={{ animation: "fadeSlideUp 0.7s ease 0.1s both" }}>
          <h1 style={{
            fontSize: isMobile ? "2rem" : isTablet ? "2.8rem" : "3.8rem",
            fontWeight: "900",
            lineHeight: 1.12,
            letterSpacing: "-1px",
            margin: 0,
            color: "#1e3a8a",
          }}>
            Connecting{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563eb, #3b82f6, #1d4ed8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Farmers
            </span>
            <br />
            with Trusted{" "}
            <span style={{
              background: "linear-gradient(135deg, #1d4ed8, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Service Providers
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p style={{
          fontSize: isMobile ? "0.95rem" : isTablet ? "1.04rem" : "1.12rem",
          color: "#4b6fa8",
          maxWidth: "540px",
          lineHeight: 1.75,
          margin: 0,
          animation: "fadeSlideUp 0.7s ease 0.2s both",
        }}>
          Book verified agricultural services — tractor rental, irrigation,
          soil testing, veterinary care & more. Right at your doorstep,
          in your local language.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "14px",
          width: isMobile ? "100%" : "auto",
          animation: "fadeSlideUp 0.7s ease 0.3s both",
        }}>
          {/* Primary */}
          <button
            onMouseEnter={() => setHoveredBtn("find")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              padding: isMobile ? "15px 24px" : "15px 38px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontSize: isMobile ? "1rem" : "1.05rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
              color: "#fff",
              boxShadow: hoveredBtn === "find"
                ? "0 10px 30px rgba(37,99,235,0.40)"
                : "0 4px 18px rgba(37,99,235,0.28)",
              transform: hoveredBtn === "find" ? "translateY(-2px)" : "translateY(0)",
              transition: "all 0.25s",
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "8px",
              width: isMobile ? "100%" : "auto",
              letterSpacing: "0.02em",
            }}
          >
            🔍 Find a Service
          </button>

          {/* Secondary */}
          <button
            onMouseEnter={() => setHoveredBtn("provider")}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              padding: isMobile ? "15px 24px" : "15px 38px",
              borderRadius: "12px",
              border: "2px solid #3b82f6",
              cursor: "pointer",
              fontSize: isMobile ? "1rem" : "1.05rem",
              fontWeight: "700",
              background: hoveredBtn === "provider"
                ? "rgba(37,99,235,0.08)"
                : "rgba(255,255,255,0.70)",
              backdropFilter: "blur(10px)",
              color: "#2563eb",
              transform: hoveredBtn === "provider" ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hoveredBtn === "provider"
                ? "0 8px 24px rgba(37,99,235,0.16)"
                : "0 2px 10px rgba(37,99,235,0.10)",
              transition: "all 0.25s",
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "8px",
              width: isMobile ? "100%" : "auto",
              letterSpacing: "0.02em",
            }}
          >
            🤝 Become a Provider
          </button>
        </div>

        {/* Social Proof Row */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: isMobile ? "8px" : "12px",
          animation: "fadeSlideUp 0.7s ease 0.4s both",
          flexWrap: "wrap", justifyContent: "center",
        }}>
          <div style={{ display: "flex" }}>
            {["👨‍🌾", "👩‍🌾", "🧑‍🌾", "👴"].map((emoji, i) => (
              <div key={i} style={{
                width: isMobile ? "30px" : "34px",
                height: isMobile ? "30px" : "34px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, #dbeafe, #bfdbfe)`,
                border: "2px solid rgba(255,255,255,0.90)",
                display: "flex", alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "0.82rem" : "0.95rem",
                marginLeft: i > 0 ? "-10px" : "0",
                zIndex: 4 - i,
                position: "relative",
                boxShadow: "0 2px 8px rgba(37,99,235,0.15)",
              }}>
                {emoji}
              </div>
            ))}
          </div>
          <span style={{
            color: "#64748b",
            fontSize: isMobile ? "0.78rem" : "0.85rem",
          }}>
            <span style={{ color: "#2563eb", fontWeight: "700" }}>500+ farmers</span>
            {" "}already using Kannect
          </span>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div style={{
        position: "relative", zIndex: 4,
        maxWidth: "820px",
        margin: "0 auto",
        padding: isMobile ? "0 20px 48px" : "0 24px 60px",
        width: "100%",
        boxSizing: "border-box",
        animation: "fadeSlideUp 0.7s ease 0.5s both",
      }}>
        {isMobile ? (
          <div style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.95)",
            borderRadius: "18px",
            padding: "22px 20px",
            textAlign: "center",
            boxShadow: "0 4px 24px rgba(37,99,235,0.10)",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "6px" }}>
              {stats[currentStat].icon}
            </div>
            <div style={{
              fontSize: "2.2rem", fontWeight: "900",
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}>
              {stats[currentStat].value}
            </div>
            <div style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "5px", fontWeight: "500" }}>
              {stats[currentStat].label}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "14px" }}>
              {stats.map((_, i) => (
                <div key={i} style={{
                  width: i === currentStat ? "22px" : "6px",
                  height: "6px", borderRadius: "3px",
                  background: i === currentStat
                    ? "linear-gradient(90deg,#2563eb,#3b82f6)"
                    : "rgba(37,99,235,0.18)",
                  transition: "all 0.4s",
                }} />
              ))}
            </div>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
          }}>
            {stats.map((stat, i) => (
              <div key={i}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  borderRadius: "16px",
                  padding: "22px 16px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.08)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,99,235,0.16)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.92)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{stat.icon}</div>
                <div style={{
                  fontSize: isTablet ? "1.8rem" : "2.2rem",
                  fontWeight: "900",
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "6px", fontWeight: "500" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Scroll Indicator ── */}
      {/* {!isMobile && (
        <div  style={{
          position: "absolute", bottom: "22px", left: "50%",
          transform: "translateX(-50%)", zIndex: 4,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "6px",
          animation: "fadeSlideUp 1s ease 0.9s both",
        }}>
          <span style={{ color: "#94a3b8", fontSize: "0.7rem", letterSpacing: "0.12em", fontWeight: "600" }}>
            SCROLL DOWN
          </span>
          <div style={{
            width: "24px", height: "38px", borderRadius: "12px",
            border: "2px solid rgba(37,99,235,0.25)",
            display: "flex", justifyContent: "center", paddingTop: "6px",
          }}>
            <div style={{
              width: "4px", height: "8px", borderRadius: "2px",
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              animation: "scrollDot 1.8s ease-in-out infinite",
            }} />
          </div>
        </div>
      )} */}

      <style>{`
        @keyframes blobPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.10); opacity: 0.7; }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(59,130,246,0.8); }
          50% { opacity: 0.3; box-shadow: 0 0 3px rgba(59,130,246,0.3); }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          80% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;