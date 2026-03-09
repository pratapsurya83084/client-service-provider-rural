import { useState, useEffect } from "react";

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

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
    const timer = setInterval(() => goTo((prev) => (prev + 1) % 3), 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (indexOrFn) => {
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => {
        const next = typeof indexOrFn === "function" ? indexOrFn(prev) : indexOrFn;
        return next;
      });
      setAnimating(false);
    }, 220);
  };

  const testimonials = [
    {
      name: "Ramesh Patel",
      village: "Khandwa Village, Madhya Pradesh",
      role: "Wheat & Soybean Farmer",
      avatar: "👨‍🌾",
      avatarBg: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
      rating: 5,
      quote: "Kannect ne meri kheti badal di. Pehle tractor dhundhne mein 2 din lagte the, ab sirf 10 minute mein booking ho jaati hai. Bahut acha service mila aur price bhi bilkul sahi tha.",
      translation: "Kannect transformed my farming. Earlier finding a tractor took 2 days, now booking happens in just 10 minutes. Excellent service and the price was absolutely right.",
      service: "Tractor Rental",
      serviceIcon: "🚜",
      since: "Using Kannect since 6 months",
    },
    {
      name: "Savitri Devi",
      village: "Anandpur, Rajasthan",
      role: "Vegetable & Cotton Farmer",
      avatar: "👩‍🌾",
      avatarBg: "linear-gradient(135deg, #eff6ff, #dbeafe)",
      rating: 5,
      quote: "Soil testing ke baad pata chala meri zameen mein kya kami hai. Ab sahi fertilizer use kar rahi hoon aur is baar fasal 30% zyada aayi. Kannect se bahut fayda hua.",
      translation: "After soil testing I found out what my land was lacking. Now using the right fertilizer, my crop yield increased by 30% this season. Kannect has been very beneficial.",
      service: "Soil Testing",
      serviceIcon: "🧪",
      since: "Using Kannect since 4 months",
    },
    {
      name: "Sukhwinder Singh",
      village: "Fatehgarh Sahib, Punjab",
      role: "Rice & Wheat Farmer",
      avatar: "👴",
      avatarBg: "linear-gradient(135deg, #dbeafe, #eff6ff)",
      rating: 5,
      quote: "Mere gaay ko achanak bimari ho gayi. Ek ghante mein Kannect se vet aa gaya. Mera pashu bach gaya. Yeh app rural areas ke liye bahut zaruri hai. Shukriya Kannect.",
      translation: "My cow suddenly fell sick. Within one hour a vet arrived through Kannect. My animal was saved. This app is very essential for rural areas. Thank you Kannect.",
      service: "Veterinary Care",
      serviceIcon: "🐄",
      since: "Using Kannect since 8 months",
    },
  ];

  const t = testimonials[active];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: "linear-gradient(145deg, #e8eef7 0%, #d5e3f5 40%, #c8d8f0 75%, #dbeafe 100%)",
        padding: isMobile ? "60px 0 70px" : "90px 0 100px",
      }}
    >
      {/* ── Blobs ── */}
      <div style={{
        position: "absolute", top: "-100px", right: "-80px",
        width: isMobile ? "280px" : "460px",
        height: isMobile ? "280px" : "460px",
        borderRadius: "50%",
        background: "rgba(100,160,255,0.16)",
        filter: "blur(60px)", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "-80px",
        width: isMobile ? "240px" : "400px",
        height: isMobile ? "240px" : "400px",
        borderRadius: "50%",
        background: "rgba(80,140,255,0.13)",
        filter: "blur(55px)", zIndex: 0,
      }} />

      {/* ── Dot Grid ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.09) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: "1100px",
        margin: "0 auto",
        padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 24px",
        boxSizing: "border-box",
      }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? "36px" : "56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(37,99,235,0.20)",
            borderRadius: "100px",
            padding: "7px 18px",
            marginBottom: "18px",
            boxShadow: "0 2px 12px rgba(37,99,235,0.10)",
          }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#3b82f6",
              boxShadow: "0 0 8px rgba(59,130,246,0.7)",
              display: "inline-block",
            }} />
            <span style={{ color: "#2563eb", fontSize: "0.8rem", fontWeight: "600", letterSpacing: "0.04em" }}>
              Real Farmer Stories
            </span>
          </div>

          <h2 style={{
            fontSize: isMobile ? "1.9rem" : isTablet ? "2.4rem" : "3rem",
            fontWeight: "900",
            letterSpacing: "-0.5px",
            color: "#1e3a8a",
            margin: "0 0 14px",
            lineHeight: 1.15,
          }}>
            What{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Farmers
            </span>{" "}
            Say About Us
          </h2>
          <p style={{
            color: "#4b6fa8",
            fontSize: isMobile ? "0.92rem" : "1.05rem",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Hear directly from farmers across rural India who transformed
            their farming experience with Kannect.
          </p>
        </div>

        {/* ── Main Testimonial Card ── */}
        <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative" }}>

          {/* Big quote mark */}
          <div style={{
            position: "absolute",
            top: isMobile ? "-10px" : "-20px",
            left: isMobile ? "20px" : "40px",
            fontSize: isMobile ? "6rem" : "9rem",
            lineHeight: 1,
            color: "rgba(37,99,235,0.10)",
            fontFamily: "Georgia, serif",
            fontWeight: "900",
            userSelect: "none",
            zIndex: 0,
            pointerEvents: "none",
          }}>
            "
          </div>

          {/* Card */}
          <div style={{
            position: "relative", zIndex: 1,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(18px)",
            border: "1.5px solid rgba(255,255,255,0.98)",
            borderRadius: "28px",
            padding: isMobile ? "28px 22px" : "44px 48px",
            boxShadow: "0 12px 48px rgba(37,99,235,0.13)",
            overflow: "hidden",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(12px)" : "translateY(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
          }}>
            {/* Top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
              borderRadius: "28px 28px 0 0",
            }} />

            {/* Service tag */}
            <div style={{
              position: "absolute",
              top: isMobile ? "18px" : "24px",
              right: isMobile ? "18px" : "24px",
              display: "flex", alignItems: "center", gap: "6px",
              background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
              border: "1px solid #bfdbfe",
              borderRadius: "100px",
              padding: "5px 12px",
            }}>
              <span style={{ fontSize: "0.85rem" }}>{t.serviceIcon}</span>
              <span style={{ fontSize: "0.72rem", fontWeight: "700", color: "#2563eb" }}>
                {t.service}
              </span>
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "20px", marginTop: "8px" }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} style={{ fontSize: isMobile ? "1.1rem" : "1.3rem" }}>⭐</span>
              ))}
            </div>

            {/* Quote */}
            <p style={{
              fontSize: isMobile ? "1rem" : "1.18rem",
              color: "#1e3a8a",
              lineHeight: 1.85,
              margin: "0 0 14px",
              fontWeight: "600",
              fontStyle: "italic",
            }}>
              "{t.quote}"
            </p>

            {/* Translation */}
            <p style={{
              fontSize: isMobile ? "0.82rem" : "0.90rem",
              color: "#64748b",
              lineHeight: 1.7,
              margin: "0 0 28px",
              padding: "12px 16px",
              background: "linear-gradient(135deg, #f8faff, #eff6ff)",
              border: "1px solid #dbeafe",
              borderRadius: "12px",
              borderLeft: "3px solid #3b82f6",
            }}>
              🌐 {t.translation}
            </p>

            {/* Farmer Info */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: isMobile ? "52px" : "62px",
                  height: isMobile ? "52px" : "62px",
                  borderRadius: "18px",
                  background: t.avatarBg,
                  border: "2px solid #bfdbfe",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: isMobile ? "1.6rem" : "1.9rem",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.14)",
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{
                    fontSize: isMobile ? "0.97rem" : "1.05rem",
                    fontWeight: "800", color: "#1e3a8a", marginBottom: "3px",
                  }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#3b82f6", fontWeight: "600", marginBottom: "2px" }}>
                    📍 {t.village}
                  </div>
                  <div style={{ fontSize: "0.74rem", color: "#94a3b8", fontWeight: "500" }}>
                    🌾 {t.role}
                  </div>
                </div>
              </div>

              <div style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                border: "1px solid #bfdbfe",
                borderRadius: "100px",
                padding: "6px 14px",
              }}>
                <span style={{ fontSize: "0.75rem" }}>✅</span>
                <span style={{ fontSize: "0.72rem", fontWeight: "700", color: "#2563eb", whiteSpace: "nowrap" }}>
                  {t.since}
                </span>
              </div>
            </div>
          </div>

          {/* ── Navigation: Single Row ── */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginTop: "28px",
            flexWrap: "nowrap",
            width: "100%",
          }}>

            {/* Prev */}
            <button
              onClick={() => goTo((p) => (p - 1 + 3) % 3)}
              style={{
                width: "40px", height: "40px", minWidth: "40px",
                borderRadius: "12px",
                border: "1.5px solid #bfdbfe",
                cursor: "pointer",
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(10px)",
                color: "#2563eb",
                fontSize: "1rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 10px rgba(37,99,235,0.10)",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37,99,235,0.08)";
                e.currentTarget.style.transform = "translateX(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              ←
            </button>

            {/* Avatar Dots */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "nowrap",
              flexShrink: 1,
              minWidth: 0,
              overflow: "hidden",
            }}>
              {testimonials.map((tm, i) => (
                <div
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: i === active ? "7px 14px" : "7px 10px",
                    borderRadius: "100px",
                    cursor: "pointer",
                    background: i === active
                      ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                      : "rgba(255,255,255,0.70)",
                    border: i === active ? "none" : "1.5px solid rgba(37,99,235,0.18)",
                    boxShadow: i === active
                      ? "0 4px 14px rgba(37,99,235,0.28)"
                      : "0 2px 8px rgba(37,99,235,0.07)",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    backdropFilter: "blur(10px)",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: "0.95rem", lineHeight: 1 }}>{tm.avatar}</span>
                  {i === active && (
                    <span style={{
                      fontSize: "0.73rem", fontWeight: "700",
                      color: "#fff", whiteSpace: "nowrap",
                    }}>
                      {tm.name.split(" ")[0]}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => goTo((p) => (p + 1) % 3)}
              style={{
                width: "40px", height: "40px", minWidth: "40px",
                borderRadius: "12px",
                border: "1.5px solid #bfdbfe",
                cursor: "pointer",
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(10px)",
                color: "#2563eb",
                fontSize: "1rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 10px rgba(37,99,235,0.10)",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37,99,235,0.08)";
                e.currentTarget.style.transform = "translateX(2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* ── Bottom Trust Bar ── */}
        <div style={{
          marginTop: isMobile ? "44px" : "64px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
          gap: "14px",
        }}>
          {[
            { icon: "👨‍🌾", value: "500+", label: "Happy Farmers" },
            { icon: "⭐", value: "4.8", label: "Average Rating" },
            { icon: "🏘️", value: "20+", label: "Villages Covered" },
            { icon: "🛠️", value: "50+", label: "Verified Providers" },
          ].map((stat, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(14px)",
              border: "1.5px solid rgba(255,255,255,0.95)",
              borderRadius: "16px",
              padding: isMobile ? "16px 12px" : "20px 16px",
              textAlign: "center",
              boxShadow: "0 4px 16px rgba(37,99,235,0.08)",
              transition: "all 0.28s",
              cursor: "default",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(37,99,235,0.16)";
                e.currentTarget.style.background = "rgba(255,255,255,0.95)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.75)";
              }}
            >
              <div style={{ fontSize: isMobile ? "1.4rem" : "1.8rem", marginBottom: "6px" }}>{stat.icon}</div>
              <div style={{
                fontSize: isMobile ? "1.3rem" : "1.7rem",
                fontWeight: "900",
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1, marginBottom: "4px",
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: isMobile ? "0.72rem" : "0.78rem", color: "#64748b", fontWeight: "600" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;