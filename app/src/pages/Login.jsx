import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("customer");
  const [focused, setFocused] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #e8eef7 0%, #d5e3f5 50%, #c8d8f0 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif"
      }}>

      {/* Decorative blobs */}
      <div style={{
        position: "fixed", top: "-80px", right: "-80px",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "rgba(100,160,255,0.15)", filter: "blur(40px)"
      }} />
      <div style={{
        position: "fixed", bottom: "-60px", left: "-60px",
        width: "250px", height: "250px", borderRadius: "50%",
        background: "rgba(80,140,255,0.12)", filter: "blur(40px)"
      }} />

      <div className="w-full max-w-sm mx-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 style={{
            fontSize: "2.4rem", fontWeight: "800", letterSpacing: "-0.5px",
            background: "linear-gradient(135deg, #2563eb, #3b82f6, #1d4ed8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            Kannect
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.92rem", marginTop: "4px" }}>
            Sign in with your mobile number
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "28px 24px",
          boxShadow: "0 8px 40px rgba(37,99,235,0.10), 0 2px 8px rgba(0,0,0,0.06)"
        }}>

          {/* Mobile Number */}
          <div className="mb-4">
            <label style={{
              fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.08em",
              color: "#374151", textTransform: "uppercase", display: "block", marginBottom: "8px"
            }}>
              Mobile Number
            </label>
            <input
              type="tel"
              maxLength={10}
              value={mobile}
              onChange={e => setMobile(e.target.value.replace(/\D/g, ""))}
              onFocus={() => setFocused("mobile")}
              onBlur={() => setFocused("")}
              placeholder="Enter 10-digit mobile number"
              style={{
                width: "100%", padding: "13px 16px", borderRadius: "10px",
                border: focused === "mobile" ? "2px solid #3b82f6" : "2px solid #e5e7eb",
                outline: "none", fontSize: "0.95rem", color: "#111827",
                background: "#fff", boxSizing: "border-box",
                transition: "border-color 0.2s",
                boxShadow: focused === "mobile" ? "0 0 0 4px rgba(59,130,246,0.10)" : "none"
              }}
            />
          </div>

          {/* Your Name */}
          <div className="mb-5">
            <label style={{
              fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.08em",
              color: "#374151", textTransform: "uppercase", display: "block", marginBottom: "8px"
            }}>
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
              placeholder="Enter your name"
              style={{
                width: "100%", padding: "13px 16px", borderRadius: "10px",
                border: focused === "name" ? "2px solid #3b82f6" : "2px solid #e5e7eb",
                outline: "none", fontSize: "0.95rem", color: "#111827",
                background: "#fff", boxSizing: "border-box",
                transition: "border-color 0.2s",
                boxShadow: focused === "name" ? "0 0 0 4px rgba(59,130,246,0.10)" : "none"
              }}
            />
          </div>

          {/* I Am A */}
          <div className="mb-6">
            <label style={{
              fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.08em",
              color: "#374151", textTransform: "uppercase", display: "block", marginBottom: "10px"
            }}>
              I Am A
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => setRole("customer")}
                style={{
                  flex: 1, padding: "11px 0", borderRadius: "10px", border: "none",
                  cursor: "pointer", fontWeight: "600", fontSize: "0.9rem",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  transition: "all 0.2s",
                  background: role === "customer"
                    ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                    : "#f1f5f9",
                  color: role === "customer" ? "#fff" : "#64748b",
                  boxShadow: role === "customer" ? "0 4px 14px rgba(37,99,235,0.25)" : "none"
                }}>
                <span>🧑</span> Customer
              </button>
              <button
                onClick={() => setRole("provider")}
                style={{
                  flex: 1, padding: "11px 0", borderRadius: "10px", border: "none",
                  cursor: "pointer", fontWeight: "600", fontSize: "0.9rem",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  transition: "all 0.2s",
                  background: role === "provider"
                    ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                    : "#f1f5f9",
                  color: role === "provider" ? "#fff" : "#64748b",
                  boxShadow: role === "provider" ? "0 4px 14px rgba(37,99,235,0.25)" : "none"
                }}>
                <span>🛠️</span> Provider
              </button>
            </div>
          </div>

          {/* Send OTP Button */}
          <button
            style={{
              width: "100%", padding: "14px", borderRadius: "12px",
              border: "none", cursor: "pointer",
              background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
              color: "#fff", fontSize: "1rem", fontWeight: "700",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 18px rgba(37,99,235,0.30)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 6px 22px rgba(37,99,235,0.38)";
            }}
            onMouseLeave={e => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 18px rgba(37,99,235,0.30)";
            }}>
            Send OTP
          </button>

             <div className="flex justify-end items-center p-2 text-sm">
              <Link to={"/register"} className="text-blue-500 cursor-pointer"> SignUp </Link>
             </div>
          {/* Terms */}
          <p style={{
            textAlign: "center", fontSize: "0.75rem", color: "#94a3b8", marginTop: "16px"
          }}>
            By continuing, you agree to Kannect's{" "}
            <span style={{ color: "#3b82f6", cursor: "pointer" }}>Terms of Service</span>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mb-10" style={{ textAlign: "center", marginTop: "18px" }}>
          <a href="#" style={{
            color: "#3b82f6", fontSize: "0.88rem", fontWeight: "500",
            textDecoration: "none"
          }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;