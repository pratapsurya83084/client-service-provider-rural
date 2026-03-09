import { useState, useEffect } from "react";

const AppDownloadBanner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
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

  const features = [
    { icon: "🌐", text: "Works in local languages" },
    { icon: "📶", text: "Low data usage" },
    { icon: "🔒", text: "Safe & secure payments" },
    { icon: "⚡", text: "Book in under 2 minutes" },
  ];

  const qrDots = Array.from({ length: 81 }, (_, i) => {
    const row = Math.floor(i / 9);
    const col = i % 9;
    const isCorner =
      (row < 3 && col < 3) ||
      (row < 3 && col > 5) ||
      (row > 5 && col < 3);
    const isCornerInner =
      (row >= 1 && row <= 1 && col >= 1 && col <= 1) ||
      (row >= 1 && row <= 1 && col >= 7 && col <= 7) ||
      (row >= 7 && row <= 7 && col >= 1 && col <= 1);
    const pattern = [
      [1,1,1,0,1,0,1,1,1],
      [1,0,1,1,0,1,1,0,1],
      [1,0,1,0,1,0,1,0,1],
      [0,1,0,1,0,0,1,0,0],
      [1,0,1,0,1,1,0,1,0],
      [0,1,0,0,0,1,0,0,1],
      [1,1,1,1,0,1,1,1,1],
      [1,0,1,0,1,0,0,1,0],
      [1,1,1,0,0,1,1,1,1],
    ];
    return { filled: pattern[row][col] === 1, isCorner, row, col };
  });

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background:
          "linear-gradient(145deg, #e8eef7 0%, #d5e3f5 40%, #c8d8f0 75%, #dbeafe 100%)",
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
        backgroundImage:
          "radial-gradient(circle, rgba(37,99,235,0.09) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: "1100px",
        margin: "0 auto",
        padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0 24px",
        boxSizing: "border-box",
      }}>

        {/* ── Main Banner Card ── */}
        <div style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(18px)",
          border: "1.5px solid rgba(255,255,255,0.98)",
          borderRadius: "28px",
          padding: isMobile ? "32px 22px" : isTablet ? "44px 40px" : "56px 60px",
          boxShadow: "0 12px 48px rgba(37,99,235,0.13)",
          position: "relative",
          overflow: "hidden",
        }}>

          {/* Top accent */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
            borderRadius: "28px 28px 0 0",
          }} />

          {/* Decorative circle bg */}
          <div style={{
            position: "absolute",
            right: isMobile ? "-60px" : "-80px",
            top: "-80px",
            width: isMobile ? "220px" : "340px",
            height: isMobile ? "220px" : "340px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(37,99,235,0.07), rgba(59,130,246,0.04))",
            border: "1.5px solid rgba(37,99,235,0.08)",
            zIndex: 0,
          }} />
          <div style={{
            position: "absolute",
            left: isMobile ? "-40px" : "-60px",
            bottom: "-60px",
            width: isMobile ? "180px" : "280px",
            height: isMobile ? "180px" : "280px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(37,99,235,0.03))",
            border: "1.5px solid rgba(59,130,246,0.07)",
            zIndex: 0,
          }} />

          <div style={{
            position: "relative", zIndex: 1,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1.4fr 1fr",
            gap: isMobile ? "36px" : "48px",
            alignItems: "center",
          }}>

            {/* ── Left: Content ── */}
            <div>
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                border: "1px solid #bfdbfe",
                borderRadius: "100px",
                padding: "7px 16px",
                marginBottom: "22px",
                boxShadow: "0 2px 10px rgba(37,99,235,0.10)",
              }}>
                <span style={{ fontSize: "1rem" }}>📱</span>
                <span style={{
                  color: "#2563eb", fontSize: "0.8rem",
                  fontWeight: "700", letterSpacing: "0.04em",
                }}>
                  Now Available on Android
                </span>
                <span style={{
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff", fontSize: "0.62rem",
                  fontWeight: "700", padding: "2px 7px",
                  borderRadius: "100px", letterSpacing: "0.04em",
                }}>
                  FREE
                </span>
              </div>

              {/* Headline */}
              <h2 style={{
                fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.7rem",
                fontWeight: "900",
                letterSpacing: "-0.5px",
                color: "#1e3a8a",
                margin: "0 0 14px",
                lineHeight: 1.15,
              }}>
                Take{" "}
                <span style={{
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Kannect
                </span>
                <br />
                Everywhere You Go
              </h2>

              <p style={{
                color: "#4b6fa8",
                fontSize: isMobile ? "0.92rem" : "1rem",
                lineHeight: 1.75,
                margin: "0 0 28px",
                maxWidth: "480px",
              }}>
                Download the Kannect app and book agricultural services
                from your field, anytime — even with low internet speed.
                Supports Hindi, Marathi, Punjabi & more local languages.
              </p>

              {/* Feature Pills */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginBottom: "32px",
              }}>
                {features.map((f, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "10px 14px",
                    background: "linear-gradient(135deg, #f8faff, #eff6ff)",
                    border: "1px solid #dbeafe",
                    borderRadius: "12px",
                    borderLeft: "3px solid #3b82f6",
                  }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>{f.icon}</span>
                    <span style={{
                      fontSize: isMobile ? "0.75rem" : "0.80rem",
                      color: "#1e3a8a", fontWeight: "600", lineHeight: 1.3,
                    }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "12px",
              }}>
                {/* Play Store */}
                <button
                  onMouseEnter={() => setHoveredBtn("play")}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: isMobile ? "14px 20px" : "14px 24px",
                    borderRadius: "14px",
                    border: "none",
                    cursor: "pointer",
                    background: hoveredBtn === "play"
                      ? "linear-gradient(135deg, #1d4ed8, #2563eb)"
                      : "linear-gradient(135deg, #2563eb, #3b82f6)",
                    color: "#fff",
                    boxShadow: hoveredBtn === "play"
                      ? "0 10px 28px rgba(37,99,235,0.40)"
                      : "0 4px 18px rgba(37,99,235,0.28)",
                    transform: hoveredBtn === "play" ? "translateY(-2px)" : "translateY(0)",
                    transition: "all 0.25s",
                    width: isMobile ? "100%" : "auto",
                    textAlign: "left",
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px",
                    background: "rgba(255,255,255,0.18)",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.3rem", flexShrink: 0,
                  }}>
                    ▶
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", opacity: 0.85, fontWeight: "500", letterSpacing: "0.04em" }}>
                      GET IT ON
                    </div>
                    <div style={{ fontSize: isMobile ? "0.95rem" : "1.05rem", fontWeight: "800", lineHeight: 1.1 }}>
                      Google Play
                    </div>
                  </div>
                </button>

                {/* APK Direct */}
                <button
                  onMouseEnter={() => setHoveredBtn("apk")}
                  onMouseLeave={() => setHoveredBtn(null)}
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: isMobile ? "14px 20px" : "14px 24px",
                    borderRadius: "14px",
                    border: "2px solid #bfdbfe",
                    cursor: "pointer",
                    background: hoveredBtn === "apk"
                      ? "rgba(37,99,235,0.07)"
                      : "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(10px)",
                    color: "#2563eb",
                    transform: hoveredBtn === "apk" ? "translateY(-2px)" : "translateY(0)",
                    boxShadow: hoveredBtn === "apk"
                      ? "0 8px 22px rgba(37,99,235,0.16)"
                      : "0 2px 10px rgba(37,99,235,0.08)",
                    transition: "all 0.25s",
                    width: isMobile ? "100%" : "auto",
                    textAlign: "left",
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px",
                    background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                    border: "1px solid #bfdbfe",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.2rem", flexShrink: 0,
                  }}>
                    ⬇
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#64748b", fontWeight: "500", letterSpacing: "0.04em" }}>
                      DIRECT DOWNLOAD
                    </div>
                    <div style={{ fontSize: isMobile ? "0.95rem" : "1.05rem", fontWeight: "800", lineHeight: 1.1 }}>
                      Download APK
                    </div>
                  </div>
                </button>
              </div>

              {/* Rating row */}
              <div style={{
                display: "flex", alignItems: "center", gap: "12px",
                marginTop: "20px", flexWrap: "wrap",
              }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} style={{ fontSize: "0.95rem" }}>⭐</span>
                  ))}
                </div>
                <span style={{ fontSize: "0.82rem", color: "#64748b", fontWeight: "600" }}>
                  <span style={{ color: "#2563eb", fontWeight: "800" }}>4.8/5</span>
                  {" "}· 500+ downloads · Free
                </span>
              </div>
            </div>

            {/* ── Right: Phone Mockup + QR ── */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}>

              {/* Phone Mockup */}
              <div style={{
                position: "relative",
                width: isMobile ? "160px" : "190px",
              }}>
                {/* Glow behind phone */}
                <div style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
                  zIndex: 0,
                  animation: "glowPulse 3s ease-in-out infinite",
                }} />

                {/* Phone shell */}
                <div style={{
                  position: "relative", zIndex: 1,
                  background: "linear-gradient(160deg, #1e3a8a, #2563eb)",
                  borderRadius: "32px",
                  padding: "10px",
                  boxShadow:
                    "0 20px 60px rgba(37,99,235,0.35), 0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)",
                  animation: "floatPhone 4s ease-in-out infinite",
                }}>
                  {/* Notch */}
                  <div style={{
                    position: "absolute", top: "10px",
                    left: "50%", transform: "translateX(-50%)",
                    width: "60px", height: "10px",
                    background: "#0f2060",
                    borderRadius: "0 0 10px 10px",
                    zIndex: 3,
                  }} />

                  {/* Screen */}
                  <div style={{
                    background: "linear-gradient(160deg, #e8eef7, #dbeafe)",
                    borderRadius: "24px",
                    padding: "24px 14px 14px",
                    minHeight: isMobile ? "240px" : "290px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    overflow: "hidden",
                    position: "relative",
                  }}>
                    {/* App Header */}
                    <div style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between", marginBottom: "4px",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <div style={{
                          width: "18px", height: "18px", borderRadius: "5px",
                          background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                          display: "flex", alignItems: "center",
                          justifyContent: "center", fontSize: "0.6rem",
                        }}>🌾</div>
                        <span style={{ fontSize: "0.65rem", fontWeight: "800", color: "#1e3a8a" }}>
                          Kannect
                        </span>
                      </div>
                      <div style={{
                        fontSize: "0.55rem", background: "linear-gradient(135deg, #2563eb,#3b82f6)",
                        color: "#fff", padding: "1px 6px", borderRadius: "100px", fontWeight: "700",
                      }}>
                        LIVE
                      </div>
                    </div>

                    {/* Search bar */}
                    <div style={{
                      background: "rgba(255,255,255,0.80)",
                      border: "1px solid #bfdbfe",
                      borderRadius: "8px",
                      padding: "5px 8px",
                      fontSize: "0.55rem", color: "#94a3b8",
                    }}>
                      🔍 Search services...
                    </div>

                    {/* Service mini cards */}
                    {[
                      { icon: "🚜", name: "Tractor", price: "₹800/hr", color: "#dbeafe" },
                      { icon: "💧", name: "Irrigation", price: "₹500/hr", color: "#eff6ff" },
                      { icon: "🌿", name: "Spraying", price: "₹300/hr", color: "#dbeafe" },
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between",
                        background: "rgba(255,255,255,0.85)",
                        border: "1px solid #bfdbfe",
                        borderRadius: "8px",
                        padding: "5px 8px",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                          <span style={{ fontSize: "0.75rem" }}>{item.icon}</span>
                          <span style={{ fontSize: "0.58rem", fontWeight: "700", color: "#1e3a8a" }}>
                            {item.name}
                          </span>
                        </div>
                        <div style={{
                          fontSize: "0.55rem", fontWeight: "700",
                          color: "#2563eb",
                          background: item.color,
                          padding: "1px 5px",
                          borderRadius: "4px",
                        }}>
                          {item.price}
                        </div>
                      </div>
                    ))}

                    {/* Book button */}
                    <div style={{
                      background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                      borderRadius: "8px",
                      padding: "6px",
                      textAlign: "center",
                      fontSize: "0.58rem",
                      fontWeight: "800",
                      color: "#fff",
                      marginTop: "2px",
                      boxShadow: "0 2px 8px rgba(37,99,235,0.25)",
                    }}>
                      📅 Book Now
                    </div>
                  </div>
                </div>

                {/* Notification bubble */}
                <div style={{
                  position: "absolute",
                  top: "-12px", right: "-16px",
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  borderRadius: "12px",
                  padding: "6px 10px",
                  fontSize: "0.65rem",
                  fontWeight: "700",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
                  whiteSpace: "nowrap",
                  border: "2px solid #fff",
                  zIndex: 4,
                  animation: "floatPhone 3s ease-in-out infinite reverse",
                }}>
                  🔔 Booking confirmed!
                </div>
              </div>

              {/* QR Code */}
              <div style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid #bfdbfe",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0 6px 24px rgba(37,99,235,0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                width: isMobile ? "180px" : "200px",
              }}>
                <span style={{
                  fontSize: "0.72rem", fontWeight: "700", color: "#2563eb",
                  letterSpacing: "0.04em",
                }}>
                  📲 SCAN TO DOWNLOAD
                </span>

                {/* QR Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(9, 1fr)",
                  gap: "2px",
                  padding: "12px",
                  background: "#fff",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  width: "fit-content",
                }}>
                  {qrDots.map((dot, i) => (
                    <div key={i} style={{
                      width: "9px", height: "9px",
                      borderRadius: dot.isCorner ? "2px" : "1.5px",
                      background: dot.filled ? "#1e3a8a" : "transparent",
                    }} />
                  ))}
                </div>

                {/* Kannect logo in center of QR */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  marginTop: "-4px",
                }}>
                  <span style={{ fontSize: "0.8rem" }}>🌾</span>
                  <span style={{
                    fontSize: "0.72rem", fontWeight: "800",
                    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    kannect.app
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Stats Strip ── */}
        <div style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: "14px",
        }}>
          {[
            { icon: "📥", value: "500+", label: "Downloads" },
            { icon: "📱", value: "Android", label: "Platform" },
            { icon: "🗣️", value: "5+", label: "Languages" },
            { icon: "🆓", value: "Free", label: "Always Free" },
          ].map((stat, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(14px)",
              border: "1.5px solid rgba(255,255,255,0.95)",
              borderRadius: "16px",
              padding: isMobile ? "16px 12px" : "18px 16px",
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
              <div style={{ fontSize: "1.5rem", marginBottom: "6px" }}>{stat.icon}</div>
              <div style={{
                fontSize: isMobile ? "1.1rem" : "1.4rem",
                fontWeight: "900",
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1, marginBottom: "4px",
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: "600" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatPhone {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
};

export default AppDownloadBanner;