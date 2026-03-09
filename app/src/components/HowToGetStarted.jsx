import { useState, useEffect } from "react";

const HowToGetStarted = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const farmerSteps = [
    {
      icon: "📝",
      title: "Register",
      shortDesc: "Create your free account",
      desc: "Sign up with your mobile number, enter your name and select 'Farmer' as your role. Verification takes less than a minute.",
      color: "#2563eb",
      tips: ["Free to register", "Mobile OTP verification", "No documents needed"],
    },
    {
      icon: "🔍",
      title: "Browse Services",
      shortDesc: "Explore nearby services",
      desc: "Search from 12+ agricultural service categories. Filter by location, price & ratings to find the best providers near your village.",
      color: "#3b82f6",
      tips: ["Filter by location", "Compare providers", "Read reviews"],
    },
    {
      icon: "📅",
      title: "Book",
      shortDesc: "Schedule your service",
      desc: "Select your preferred provider, pick a date & time that suits you, and confirm your booking instantly with just a few taps.",
      color: "#1d4ed8",
      tips: ["Instant confirmation", "Choose date & time", "Verified providers only"],
    },
    {
      icon: "💳",
      title: "Pay",
      shortDesc: "Secure & easy payment",
      desc: "Pay securely via UPI, mobile banking or cash on service. Your payment is protected until the service is completed.",
      color: "#2563eb",
      tips: ["UPI / Cash accepted", "Payment protection", "No hidden charges"],
    },
    {
      icon: "⭐",
      title: "Rate",
      shortDesc: "Share your experience",
      desc: "After service completion, rate your provider and leave a review. Your feedback helps other farmers make better decisions.",
      color: "#3b82f6",
      tips: ["Help other farmers", "Build provider trust", "Earn loyalty points"],
    },
  ];

  const providerSteps = [
    {
      icon: "📋",
      title: "Register",
      shortDesc: "Create provider profile",
      desc: "Sign up with your mobile number and select 'Provider' as your role. Add your skills, experience and service area details.",
      color: "#2563eb",
      tips: ["Free registration", "Quick verification", "Set your service area"],
    },
    {
      icon: "🛠️",
      title: "List Services",
      shortDesc: "Add your offerings",
      desc: "Create detailed listings for your services with pricing, availability and photos. More complete profiles get more bookings.",
      color: "#3b82f6",
      tips: ["Set your own price", "Add availability", "Upload photos"],
    },
    {
      icon: "🔔",
      title: "Receive Bookings",
      shortDesc: "Get notified instantly",
      desc: "Receive real-time booking notifications from farmers. Accept or reschedule bookings directly from your dashboard.",
      color: "#1d4ed8",
      tips: ["Instant alerts", "Easy scheduling", "Manage bookings"],
    },
    {
      icon: "✅",
      title: "Deliver",
      shortDesc: "Complete the service",
      desc: "Visit the farmer's location, complete the service professionally, and mark it done on the app to release your payment.",
      color: "#2563eb",
      tips: ["GPS check-in", "Mark completion", "Upload proof"],
    },
    {
      icon: "💰",
      title: "Earn",
      shortDesc: "Get paid instantly",
      desc: "Receive your payment directly to your bank account within 24 hours. Build your reputation to attract more bookings.",
      color: "#3b82f6",
      tips: ["Fast bank transfer", "Build reputation", "Grow your business"],
    },
  ];

  const steps = activeTab === "farmer" ? farmerSteps : providerSteps;

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
              Onboarding Funnel
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
            How to{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563eb, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Get Started
            </span>
          </h2>
          <p style={{
            color: "#4b6fa8",
            fontSize: isMobile ? "0.92rem" : "1.05rem",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Get up and running in minutes — follow these simple steps to start
            using Kannect today.
          </p>
        </div>

        {/* ── Tab Switcher ── */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: isMobile ? "32px" : "48px" }}>
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
                onClick={() => { setActiveTab(tab.key); setActiveStep(0); }}
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

        {/* ── Main Layout ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1.6fr",
          gap: isMobile ? "24px" : "32px",
          alignItems: "start",
        }}>

          {/* ── Left: Step List ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: isMobile ? "14px 16px" : "16px 18px",
                  borderRadius: "16px",
                  cursor: "pointer",
                  background: activeStep === i
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(12px)",
                  border: activeStep === i
                    ? "1.5px solid #93c5fd"
                    : "1.5px solid rgba(255,255,255,0.80)",
                  boxShadow: activeStep === i
                    ? "0 8px 28px rgba(37,99,235,0.16)"
                    : "0 2px 10px rgba(37,99,235,0.06)",
                  transform: activeStep === i ? "translateX(4px)" : "translateX(0)",
                  transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Active left bar */}
                {activeStep === i && (
                  <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: "4px",
                    background: "linear-gradient(180deg, #2563eb, #3b82f6)",
                    borderRadius: "4px 0 0 4px",
                  }} />
                )}

                {/* Step icon */}
                <div style={{
                  width: isMobile ? "42px" : "48px",
                  height: isMobile ? "42px" : "48px",
                  borderRadius: "13px",
                  background: activeStep === i
                    ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                    : "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  border: activeStep === i ? "none" : "1.5px solid #bfdbfe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? "1.2rem" : "1.4rem",
                  flexShrink: 0,
                  boxShadow: activeStep === i
                    ? "0 4px 14px rgba(37,99,235,0.28)"
                    : "none",
                  transition: "all 0.28s",
                }}>
                  <span style={{
                    filter: activeStep === i ? "brightness(10)" : "none",
                    transition: "filter 0.28s",
                  }}>
                    {step.icon}
                  </span>
                </div>

                {/* Step text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: "8px",
                  }}>
                    <span style={{
                      fontSize: isMobile ? "0.92rem" : "0.97rem",
                      fontWeight: "800",
                      color: activeStep === i ? "#2563eb" : "#1e3a8a",
                      transition: "color 0.25s",
                    }}>
                      {step.title}
                    </span>
                    <span style={{
                      fontSize: "0.68rem",
                      fontWeight: "700",
                      color: activeStep === i ? "#fff" : "#3b82f6",
                      background: activeStep === i
                        ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                        : "linear-gradient(135deg, #eff6ff, #dbeafe)",
                      padding: "2px 8px",
                      borderRadius: "100px",
                      border: activeStep === i ? "none" : "1px solid #bfdbfe",
                      flexShrink: 0,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p style={{
                    fontSize: "0.80rem",
                    color: activeStep === i ? "#4b6fa8" : "#94a3b8",
                    margin: "3px 0 0",
                    transition: "color 0.25s",
                  }}>
                    {step.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Detail Panel ── */}
          <div style={{
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(16px)",
            border: "1.5px solid rgba(255,255,255,0.95)",
            borderRadius: "24px",
            padding: isMobile ? "24px 20px" : "36px 32px",
            boxShadow: "0 8px 36px rgba(37,99,235,0.12)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Top accent bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
              borderRadius: "24px 24px 0 0",
            }} />

            {/* Step number watermark */}
            <div style={{
              position: "absolute", right: "24px", bottom: "16px",
              fontSize: isMobile ? "5rem" : "7rem",
              fontWeight: "900",
              color: "rgba(37,99,235,0.06)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}>
              {String(activeStep + 1).padStart(2, "0")}
            </div>

            {/* Icon + Step badge */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", marginBottom: "20px",
            }}>
              <div style={{
                width: isMobile ? "62px" : "74px",
                height: isMobile ? "62px" : "74px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: isMobile ? "1.8rem" : "2.2rem",
                boxShadow: "0 6px 20px rgba(37,99,235,0.28)",
              }}>
                <span style={{ filter: "brightness(10)" }}>
                  {steps[activeStep].icon}
                </span>
              </div>
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "flex-end", gap: "6px",
              }}>
                <span style={{
                  fontSize: "0.72rem", fontWeight: "700",
                  color: "#2563eb", letterSpacing: "0.06em",
                  background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  border: "1px solid #bfdbfe",
                  padding: "4px 12px", borderRadius: "100px",
                }}>
                  STEP {activeStep + 1} OF 5
                </span>
                {/* Progress dots */}
                <div style={{ display: "flex", gap: "5px" }}>
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveStep(i)}
                      style={{
                        width: i === activeStep ? "20px" : "7px",
                        height: "7px",
                        borderRadius: "4px",
                        background: i === activeStep
                          ? "linear-gradient(90deg, #2563eb, #3b82f6)"
                          : "rgba(37,99,235,0.18)",
                        transition: "all 0.35s",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: isMobile ? "1.3rem" : "1.6rem",
              fontWeight: "900",
              color: "#1e3a8a",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}>
              {steps[activeStep].title}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: isMobile ? "0.92rem" : "1rem",
              color: "#4b6fa8",
              lineHeight: 1.8,
              margin: "0 0 24px",
            }}>
              {steps[activeStep].desc}
            </p>

            {/* Tips */}
            <div style={{
              display: "flex", flexDirection: "column", gap: "10px",
              marginBottom: "28px",
            }}>
              {steps[activeStep].tips.map((tip, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "10px 14px",
                  background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  border: "1px solid #bfdbfe",
                  borderRadius: "10px",
                }}>
                  <div style={{
                    width: "22px", height: "22px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(37,99,235,0.25)",
                  }}>
                    <span style={{ color: "#fff", fontSize: "0.65rem", fontWeight: "900" }}>✓</span>
                  </div>
                  <span style={{ fontSize: "0.86rem", color: "#1e3a8a", fontWeight: "600" }}>
                    {tip}
                  </span>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div style={{
              display: "flex", gap: "10px",
              flexDirection: isMobile ? "column" : "row",
            }}>
              <button
                onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                disabled={activeStep === 0}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "11px",
                  border: "2px solid #bfdbfe",
                  cursor: activeStep === 0 ? "not-allowed" : "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  background: "rgba(255,255,255,0.70)",
                  color: activeStep === 0 ? "#94a3b8" : "#2563eb",
                  transition: "all 0.2s",
                  opacity: activeStep === 0 ? 0.5 : 1,
                }}
              >
                ← Previous
              </button>
              {activeStep < 4 ? (
                <button
                  onClick={() => setActiveStep((p) => Math.min(4, p + 1))}
                  style={{
                    flex: 2,
                    padding: "12px",
                    borderRadius: "11px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                    color: "#fff",
                    boxShadow: "0 4px 16px rgba(37,99,235,0.28)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.38)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.28)";
                  }}
                >
                  Next Step →
                </button>
              ) : (
                <button
                  style={{
                    flex: 2,
                    padding: "12px",
                    borderRadius: "11px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                    color: "#fff",
                    boxShadow: "0 4px 16px rgba(37,99,235,0.28)",
                  }}
                >
                  🚀 Get Started Now!
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Progress Bar ── */}
        <div style={{
          marginTop: isMobile ? "32px" : "48px",
          background: "rgba(255,255,255,0.70)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.95)",
          borderRadius: "18px",
          padding: isMobile ? "20px 18px" : "24px 28px",
          boxShadow: "0 4px 20px rgba(37,99,235,0.10)",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
            flexWrap: "wrap", gap: "8px",
          }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#1e3a8a" }}>
              Your Progress
            </span>
            <span style={{ fontSize: "0.82rem", fontWeight: "700", color: "#3b82f6" }}>
              {activeStep + 1} / 5 Steps Completed
            </span>
          </div>

          {/* Track */}
          <div style={{
            position: "relative",
            height: "8px",
            background: "rgba(37,99,235,0.12)",
            borderRadius: "100px",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: `${((activeStep + 1) / 5) * 100}%`,
              background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
              borderRadius: "100px",
              transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: "0 0 10px rgba(59,130,246,0.40)",
            }} />
          </div>

          {/* Step labels below bar */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}>
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  opacity: i <= activeStep ? 1 : 0.4,
                  transition: "opacity 0.3s",
                  flex: 1,
                }}
              >
                <span style={{ fontSize: isMobile ? "0.9rem" : "1.1rem" }}>{step.icon}</span>
                {!isMobile && (
                  <span style={{
                    fontSize: "0.68rem",
                    fontWeight: i === activeStep ? "700" : "500",
                    color: i === activeStep ? "#2563eb" : "#94a3b8",
                    textAlign: "center",
                    transition: "color 0.3s",
                  }}>
                    {step.title}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;