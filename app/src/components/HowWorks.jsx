import { useState, useEffect } from "react";

const HowItWorks = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [activeTab, setActiveTab] = useState("farmer");

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const farmerSteps = [
    {
      step: "01",
      icon: "🔍",
      title: "Search Service",
      desc: "Browse agricultural services nearby — tractor, irrigation, soil testing, veterinary & more. Filter by location and price.",
      color: "#2563eb",
      lightColor: "#eff6ff",
      borderColor: "#bfdbfe",
      tag: "Step 1",
    },
    {
      step: "02",
      icon: "📅",
      title: "Book Instantly",
      desc: "Select a verified provider, choose your preferred date & time, and confirm your booking in just a few taps.",
      color: "#3b82f6",
      lightColor: "#dbeafe",
      borderColor: "#93c5fd",
      tag: "Step 2",
    },
    {
      step: "03",
      icon: "✅",
      title: "Get Service Done",
      desc: "Provider arrives at your farm on time. Service completed, payment done. Rate your experience to help other farmers.",
      color: "#1d4ed8",
      lightColor: "#eff6ff",
      borderColor: "#bfdbfe",
      tag: "Step 3",
    },
  ];

  const providerSteps = [
    {
      step: "01",
      icon: "📝",
      title: "Register & List",
      desc: "Sign up as a provider, verify your credentials, and list your services with pricing and availability details.",
      color: "#2563eb",
      lightColor: "#eff6ff",
      borderColor: "#bfdbfe",
      tag: "Step 1",
    },
    {
      step: "02",
      icon: "🔔",
      title: "Receive Bookings",
      desc: "Get notified instantly when a farmer books your service. Accept, manage, and schedule bookings from your dashboard.",
      color: "#3b82f6",
      lightColor: "#dbeafe",
      borderColor: "#93c5fd",
      tag: "Step 2",
    },
    {
      step: "03",
      icon: "💰",
      title: "Earn & Grow",
      desc: "Deliver the service, collect secure payments, and build your reputation with ratings from satisfied farmers.",
      color: "#1d4ed8",
      lightColor: "#eff6ff",
      borderColor: "#bfdbfe",
      tag: "Step 3",
    },
  ];

  const steps = activeTab === "farmer" ? farmerSteps : providerSteps;

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

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? "36px" : "52px" }}>
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
            <span style={{
              color: "#2563eb", fontSize: "0.8rem",
              fontWeight: "600", letterSpacing: "0.04em",
            }}>
              Simple Process
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
            How{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Kannect
            </span>{" "}
            Works
          </h2>
          <p style={{
            color: "#4b6fa8",
            fontSize: isMobile ? "0.92rem" : "1.05rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Get started in 3 simple steps — whether you're a farmer looking
            for services or a provider growing your business.
          </p>
        </div>

        {/* ── Tab Switcher ── */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: isMobile ? "36px" : "52px",
        }}>
          <div style={{
            display: "flex",
            background: "rgba(255,255,255,0.70)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.95)",
            borderRadius: "14px",
            padding: "5px",
            gap: "4px",
            boxShadow: "0 4px 20px rgba(37,99,235,0.10)",
          }}>
            {[
              { key: "farmer", label: "👨‍🌾 I'm a Farmer" },
              { key: "provider", label: "🛠️ I'm a Provider" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: isMobile ? "10px 18px" : "11px 28px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: isMobile ? "0.85rem" : "0.92rem",
                  fontWeight: "700",
                  transition: "all 0.25s",
                  background: activeTab === tab.key
                    ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                    : "transparent",
                  color: activeTab === tab.key ? "#fff" : "#64748b",
                  boxShadow: activeTab === tab.key
                    ? "0 4px 14px rgba(37,99,235,0.28)"
                    : "none",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Steps ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr 1fr",
          gap: isMobile ? "20px" : "24px",
          position: "relative",
        }}>

          {/* Connector Line (Desktop only) */}
          {!isMobile && !isTablet && (
            <div style={{
              position: "absolute",
              top: "64px",
              left: "calc(16.66% + 32px)",
              right: "calc(16.66% + 32px)",
              height: "2px",
              background: "linear-gradient(90deg, #bfdbfe, #3b82f6, #bfdbfe)",
              zIndex: 0,
              borderRadius: "2px",
            }}>
              {/* Arrow dots */}
              {[33, 66].map((pos) => (
                <div key={pos} style={{
                  position: "absolute",
                  left: `${pos}%`,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "10px", height: "10px",
                  borderRadius: "50%",
                  background: "#3b82f6",
                  boxShadow: "0 0 8px rgba(59,130,246,0.5)",
                }} />
              ))}
            </div>
          )}

          {steps.map((step, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
              style={{
                position: "relative",
                zIndex: 1,
                background: activeStep === i
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.75)",
                backdropFilter: "blur(14px)",
                border: activeStep === i
                  ? "1.5px solid #93c5fd"
                  : "1.5px solid rgba(255,255,255,0.95)",
                borderRadius: "20px",
                padding: isMobile ? "24px 20px" : "30px 26px",
                boxShadow: activeStep === i
                  ? "0 12px 36px rgba(37,99,235,0.18)"
                  : "0 4px 20px rgba(37,99,235,0.08)",
                transform: activeStep === i ? "translateY(-6px)" : "translateY(0)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                cursor: "default",
                display: "flex",
                flexDirection: isTablet && !isMobile ? "row" : "column",
                alignItems: isTablet && !isMobile ? "flex-start" : "center",
                gap: isTablet && !isMobile ? "20px" : "0",
                textAlign: isTablet && !isMobile ? "left" : "center",
              }}
            >
              {/* Step Number Tag */}
              <div style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                border: "1px solid #bfdbfe",
                borderRadius: "100px",
                padding: "3px 10px",
                fontSize: "0.7rem",
                fontWeight: "700",
                color: "#2563eb",
                letterSpacing: "0.04em",
              }}>
                {step.tag}
              </div>

              {/* Icon Circle */}
              <div style={{
                width: isMobile ? "68px" : "80px",
                height: isMobile ? "68px" : "80px",
                borderRadius: "22px",
                background: activeStep === i
                  ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                  : `linear-gradient(135deg, ${step.lightColor}, ${step.borderColor})`,
                border: `2px solid ${activeStep === i ? "#3b82f6" : step.borderColor}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "1.8rem" : "2.2rem",
                flexShrink: 0,
                boxShadow: activeStep === i
                  ? "0 6px 20px rgba(37,99,235,0.28)"
                  : "0 2px 10px rgba(37,99,235,0.10)",
                transition: "all 0.3s",
                marginBottom: isTablet && !isMobile ? "0" : "18px",
                filter: activeStep === i ? "none" : "none",
              }}>
                <span style={{ filter: activeStep === i ? "brightness(10)" : "none", transition: "filter 0.3s" }}>
                  {step.icon}
                </span>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                {/* Big step number */}
                <div style={{
                  fontSize: isMobile ? "2.8rem" : "3.5rem",
                  fontWeight: "900",
                  lineHeight: 1,
                  background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(59,130,246,0.08))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "6px",
                  display: isTablet && !isMobile ? "none" : "block",
                }}>
                  {step.step}
                </div>

                <h3 style={{
                  fontSize: isMobile ? "1.1rem" : "1.2rem",
                  fontWeight: "800",
                  color: "#1e3a8a",
                  margin: "0 0 10px",
                  lineHeight: 1.2,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? "0.88rem" : "0.93rem",
                  color: "#4b6fa8",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {step.desc}
                </p>

                {/* Arrow for tablet row */}
                {isTablet && !isMobile && i < 2 && (
                  <div style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    marginTop: "14px",
                    color: "#3b82f6", fontSize: "0.82rem", fontWeight: "600",
                  }}>
                    Next step →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{
          textAlign: "center",
          marginTop: isMobile ? "44px" : "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}>
          <p style={{
            color: "#4b6fa8",
            fontSize: isMobile ? "0.92rem" : "1rem",
            margin: 0,
          }}>
            Ready to get started?
          </p>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "12px",
            width: isMobile ? "100%" : "auto",
          }}>
            <button style={{
              padding: isMobile ? "14px 24px" : "13px 34px",
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
              🔍 Find a Service Now
            </button>
            <button style={{
              padding: isMobile ? "14px 24px" : "13px 34px",
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
              🤝 Join as Provider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;