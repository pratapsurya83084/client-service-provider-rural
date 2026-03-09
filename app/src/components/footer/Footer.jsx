import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const footerLinks = {
    Services: [
      "Tractor Rental",
      "Irrigation",
      "Pesticide Spraying",
      "Soil Testing",
      "Harvesting",
      "Veterinary",
    ],
    Company: ["About Us", "How It Works", "Careers", "Blog", "Press Kit"],
    Support: ["Help Center", "Contact Us", "Report an Issue", "FAQs", "Community"],
  };

  const socialLinks = [
    { icon: "f", label: "Facebook" },
    { icon: "in", label: "Instagram" },
    { icon: "tw", label: "Twitter" },
    { icon: "yt", label: "YouTube" },
    { icon: "li", label: "LinkedIn" },
  ];

  const socialEmojis = {
    f: "📘",
    in: "📸",
    tw: "🐦",
    yt: "▶️",
    li: "💼",
  };

  const contactItems = [
    { icon: "📞", text: "+91 98765 43210", label: "Call Us" },
    { icon: "✉️", text: "support@kannect.app", label: "Email Us" },
    { icon: "📍", text: "Maharastra, India", label: "Office" },
    { icon: "🕐", text: "Mon–Sat, 9AM – 6PM IST", label: "Hours" },
  ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"];
  const languages = ["हिंदी", "मराठी", "ਪੰਜਾਬੀ", "తెలుగు", "English"];

  const isDesktop = !isMobile && !isTablet;

  return (
    <footer
    className="hidden md:block"
      style={{
        background: "#ffffff",
        color: "#333",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Newsletter */}
      <div style={{ borderBottom: "1px solid #e5e5e5" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "40px 24px",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700" }}>
              🌾 Get Farming Tips & Alerts
            </h3>
            <p style={{ color: "#666" }}>
              Subscribe for seasonal farming tips and service alerts.
            </p>
          </div>

          {!subscribed ? (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                onClick={() => email && setSubscribed(true)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2563eb",
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
          ) : (
            <div style={{ color: "#2563eb", fontWeight: "600" }}>
              ✅ You're subscribed!
            </div>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "50px 24px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        {/* Brand */}
        <div>
          <h2 style={{ color: "#2563eb" }}>🌾 Kannect</h2>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Connecting farmers with trusted local service providers across rural
            India.
          </p>

          {contactItems.map((item, i) => (
            <div key={i} style={{ marginTop: "8px", color: "#555" }}>
              {item.icon} {item.text}
            </div>
          ))}

          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            {socialLinks.map((s, i) => (
              <button
                key={i}
                style={{
                  padding: "6px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  background: "#f9f9f9",
                  cursor: "pointer",
                }}
              >
                {socialEmojis[s.icon]}
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 style={{ color: "#2563eb" }}>{title}</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {links.map((link, i) => {
                const key = `${title}-${i}`;
                return (
                  <li key={i} style={{ marginTop: "8px" }}>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink(key)}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{
                        color: hoveredLink === key ? "#2563eb" : "#555",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                      }}
                    >
                      {hoveredLink === key ? "→ " : ""}
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Languages */}
        {isDesktop && (
          <div>
            <h4 style={{ color: "#2563eb" }}>Languages</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {languages.map((lang, i) => (
                <span
                  key={i}
                  style={{
                    padding: "4px 10px",
                    background: "#f3f4f6",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #e5e5e5",
          padding: "18px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ color: "#666", fontSize: "0.85rem" }}>
          © 2025 Kannect Technologies Pvt. Ltd.
        </div>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {legalLinks.map((link, i) => (
            <a
              key={i}
              href="#"
              style={{
                color: "#666",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;