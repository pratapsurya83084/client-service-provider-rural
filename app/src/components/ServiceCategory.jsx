import { useState, useEffect } from "react";

const ServiceCategories = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const categories = ["All", "Farming", "Equipment", "Animal Care", "inputs"];

  const services = [
    {
      icon: "🚜",
      title: "Tractor Rental",
      desc: "Hire tractors for ploughing, tilling & field preparation",
      tag: "Equipment",
      providers: 24,
      rating: 4.8,
      popular: true,
    },
    {
      icon: "💧",
      title: "Irrigation",
      desc: "Drip, sprinkler & canal irrigation setup & maintenance",
      tag: "Farming",
      providers: 18,
      rating: 4.7,
      popular: false,
    },
    {
      icon: "🌿",
      title: "Pesticide Spraying",
      desc: "Professional spraying services for crops & orchards",
      tag: "Farming",
      providers: 31,
      rating: 4.6,
      popular: true,
    },
    {
      icon: "🧪",
      title: "Soil Testing",
      desc: "Accurate soil nutrient & pH analysis for better yield",
      tag: "Farming",
      providers: 12,
      rating: 4.9,
      popular: false,
    },
    {
      icon: "🌾",
      title: "Harvesting",
      desc: "Combine harvesters & manual harvesting teams available",
      tag: "Equipment",
      providers: 20,
      rating: 4.7,
      popular: true,
    },
    {
      icon: "🐄",
      title: "Veterinary",
      desc: "On-call vets for livestock health, vaccination & care",
      tag: "Animal Care",
      providers: 15,
      rating: 4.8,
      popular: false,
    },
    {
      icon: "🌱",
      title: "Seeds & Fertilizers",
      desc: "Quality seeds, organic & chemical fertilizers delivered",
      tag: "inputs",
      providers: 40,
      rating: 4.5,
      popular: true,
    },
    {
      icon: "👷",
      title: "Farm Labour",
      desc: "Skilled & unskilled agricultural workers on daily hire",
      tag: "Farming",
      providers: 55,
      rating: 4.4,
      popular: false,
    },
    {
      icon: "🚛",
      title: "Transport",
      desc: "Crop & produce transportation to markets & warehouses",
      tag: "Equipment",
      providers: 22,
      rating: 4.6,
      popular: false,
    },
    {
      icon: "🏗️",
      title: "Land Levelling",
      desc: "Precision land grading & levelling for better irrigation",
      tag: "Equipment",
      providers: 10,
      rating: 4.7,
      popular: false,
    },
    {
      icon: "🐓",
      title: "Poultry Care",
      desc: "Poultry farm setup, feed supply & health management",
      tag: "Animal Care",
      providers: 9,
      rating: 4.5,
      popular: false,
    },
    {
      icon: "🧴",
      title: "Crop Protection",
      desc: "Fungicide, herbicide & bio-pesticide supply & application",
      tag: "inputs",
      providers: 17,
      rating: 4.6,
      popular: false,
    },
  ];

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.tag === activeCategory);

  const categoryLabels = {
    All: "🌐 All",
    Farming: "🌾 Farming",
    Equipment: "🚜 Equipment",
    "Animal Care": "🐄 Animal Care",
    inputs: "🌱 Inputs",
  };

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
      {/* ── Background Blobs ── */}
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

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
          {/* Badge */}
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
              12+ Service Categories
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
            Explore{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Services
            </span>{" "}
            Near You
          </h2>
          <p style={{
            color: "#4b6fa8",
            fontSize: isMobile ? "0.92rem" : "1.05rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            From tractor rentals to veterinary care — find trusted local
            service providers for every farming need.
          </p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: isMobile ? "32px" : "44px",
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: isMobile ? "8px 14px" : "9px 20px",
                borderRadius: "100px",
                border: activeCategory === cat
                  ? "none"
                  : "1.5px solid rgba(37,99,235,0.20)",
                cursor: "pointer",
                fontSize: isMobile ? "0.80rem" : "0.88rem",
                fontWeight: "700",
                transition: "all 0.22s",
                background: activeCategory === cat
                  ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                  : "rgba(255,255,255,0.70)",
                backdropFilter: "blur(10px)",
                color: activeCategory === cat ? "#fff" : "#4b6fa8",
                boxShadow: activeCategory === cat
                  ? "0 4px 14px rgba(37,99,235,0.28)"
                  : "0 2px 8px rgba(37,99,235,0.07)",
                whiteSpace: "nowrap",
              }}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* ── Service Cards Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr 1fr"
            : isTablet
            ? "1fr 1fr 1fr"
            : "1fr 1fr 1fr 1fr",
          gap: isMobile ? "12px" : "18px",
        }}>
          {filtered.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: "relative",
                background: hoveredCard === i
                  ? "rgba(255,255,255,0.96)"
                  : "rgba(255,255,255,0.78)",
                backdropFilter: "blur(14px)",
                border: hoveredCard === i
                  ? "1.5px solid #93c5fd"
                  : "1.5px solid rgba(255,255,255,0.95)",
                borderRadius: isMobile ? "16px" : "20px",
                padding: isMobile ? "16px 14px" : "22px 20px",
                boxShadow: hoveredCard === i
                  ? "0 12px 32px rgba(37,99,235,0.18)"
                  : "0 4px 16px rgba(37,99,235,0.08)",
                transform: hoveredCard === i ? "translateY(-5px)" : "translateY(0)",
                transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div style={{
                  position: "absolute", top: "12px", right: "12px",
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  fontSize: "0.62rem",
                  fontWeight: "700",
                  padding: "3px 8px",
                  borderRadius: "100px",
                  letterSpacing: "0.04em",
                }}>
                  🔥 Popular
                </div>
              )}

              {/* Hover Glow */}
              {hoveredCard === i && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
                  borderRadius: "20px 20px 0 0",
                }} />
              )}

              {/* Icon */}
              <div style={{
                width: isMobile ? "48px" : "58px",
                height: isMobile ? "48px" : "58px",
                borderRadius: isMobile ? "14px" : "16px",
                background: hoveredCard === i
                  ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                  : "linear-gradient(135deg, #eff6ff, #dbeafe)",
                border: hoveredCard === i
                  ? "none"
                  : "1.5px solid #bfdbfe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "1.5rem" : "1.8rem",
                marginBottom: isMobile ? "12px" : "16px",
                boxShadow: hoveredCard === i
                  ? "0 6px 18px rgba(37,99,235,0.30)"
                  : "0 2px 8px rgba(37,99,235,0.10)",
                transition: "all 0.28s",
                flexShrink: 0,
              }}>
                <span style={{
                  filter: hoveredCard === i ? "brightness(10)" : "none",
                  transition: "filter 0.28s",
                  lineHeight: 1,
                }}>
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: isMobile ? "0.88rem" : "1rem",
                fontWeight: "800",
                color: hoveredCard === i ? "#2563eb" : "#1e3a8a",
                margin: "0 0 6px",
                lineHeight: 1.2,
                transition: "color 0.25s",
                paddingRight: service.popular ? "52px" : "0",
              }}>
                {service.title}
              </h3>

              {/* Desc — hide on mobile */}
              {!isMobile && (
                <p style={{
                  fontSize: "0.82rem",
                  color: "#4b6fa8",
                  lineHeight: 1.6,
                  margin: "0 0 14px",
                }}>
                  {service.desc}
                </p>
              )}

              {/* Footer Row */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: isMobile ? "10px" : "0",
                flexWrap: "wrap",
                gap: "6px",
              }}>
                {/* Providers count */}
                <span style={{
                  fontSize: isMobile ? "0.70rem" : "0.76rem",
                  color: "#3b82f6",
                  fontWeight: "600",
                  background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  padding: "3px 8px",
                  borderRadius: "100px",
                  border: "1px solid #bfdbfe",
                }}>
                  👤 {service.providers}
                </span>

                {/* Rating */}
                <span style={{
                  fontSize: isMobile ? "0.70rem" : "0.76rem",
                  color: "#f59e0b",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}>
                  ⭐ {service.rating}
                </span>
              </div>

              {/* Book Now — visible on hover desktop */}
              {!isMobile && hoveredCard === i && (
                <button style={{
                  width: "100%",
                  marginTop: "14px",
                  padding: "9px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.84rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  color: "#fff",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.25)",
                  letterSpacing: "0.02em",
                  animation: "fadeSlideUp 0.2s ease both",
                }}>
                  Book Now →
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ── View All CTA ── */}
        <div style={{
          textAlign: "center",
          marginTop: isMobile ? "40px" : "56px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}>
          <p style={{
            color: "#4b6fa8", fontSize: "0.92rem", margin: 0,
          }}>
            Can't find what you need? We're adding more services every week.
          </p>
          <div style={{
            display: "flex",
            gap: "12px",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "100%" : "auto",
          }}>
            <button
              style={{
                padding: isMobile ? "14px 24px" : "13px 36px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                color: "#fff",
                boxShadow: "0 4px 18px rgba(37,99,235,0.28)",
                transition: "all 0.25s",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.38)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(37,99,235,0.28)";
              }}
            >
              🌐 View All Services
            </button>
            <button
              style={{
                padding: isMobile ? "14px 24px" : "13px 36px",
                borderRadius: "12px",
                border: "2px solid #3b82f6",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: "700",
                background: "rgba(255,255,255,0.70)",
                backdropFilter: "blur(10px)",
                color: "#2563eb",
                transition: "all 0.25s",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37,99,235,0.07)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.70)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              📩 Request a Service
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ServiceCategories;