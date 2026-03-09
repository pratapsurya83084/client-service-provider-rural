import { use, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/CreateContext";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Signup = () => {
    const { signUp } = useContext(UserContext);

    const [form, setForm] = useState({
        MobileNumber: "",
        Password: "",
        Username: "",
        Role: "Farmer",
        email: "",
    });
    const navigate = useNavigate();
    const [focused, setFocused] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const roles = ["Farmer", "Provider"];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // console.log("Signup Payload:", form);
        try {
            const res = await signUp(
                form.MobileNumber,
                form.Password,
                form.Username,
                form.Role,
                form.email,
            );
            console.log("response register :", res);
            if (res.success) {
                toast.success("Registred successFull");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }

            // alert("Account created successfully!");
        } catch (error) {
            console.log("error while registering user :", error);
        }
    };

    const inputStyle = (field) => ({
        width: "100%",
        padding: "13px 16px",
        borderRadius: "10px",
        border: focused === field ? "2px solid #3b82f6" : "2px solid #e5e7eb",
        outline: "none",
        fontSize: "0.95rem",
        color: "#111827",
        background: "#fff",
        boxSizing: "border-box",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow:
            focused === field ? "0 0 0 4px rgba(59,130,246,0.10)" : "none",
    });

    const labelStyle = {
        fontSize: "0.72rem",
        fontWeight: "700",
        letterSpacing: "0.08em",
        color: "#374151",
        textTransform: "uppercase",
        display: "block",
        marginBottom: "8px",
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                background:
                    "linear-gradient(135deg, #e8eef7 0%, #d5e3f5 50%, #c8d8f0 100%)",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                padding: "24px 0",
            }}
        >
            <Toaster position="top-center" reverseOrder={false} />

            {/* Decorative blobs */}
            <div
                style={{
                    position: "fixed",
                    top: "-80px",
                    right: "-80px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(100,160,255,0.15)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "fixed",
                    bottom: "-60px",
                    left: "-60px",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    background: "rgba(80,140,255,0.12)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />

            <div className="w-full max-w-sm mx-4">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1
                        style={{
                            fontSize: "2.4rem",
                            fontWeight: "800",
                            letterSpacing: "-0.5px",
                            background:
                                "linear-gradient(135deg, #2563eb, #3b82f6, #1d4ed8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Kannect
                    </h1>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "0.92rem",
                            marginTop: "4px",
                        }}
                    >
                        Create your account to get started
                    </p>
                </div>

                {/* Card */}
                <div
                    style={{
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(20px)",
                        borderRadius: "20px",
                        padding: "28px 24px",
                        boxShadow:
                            "0 8px 40px rgba(37,99,235,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                    }}
                >
                    {/* Username */}
                    <div className="mb-4">
                        <label style={labelStyle}>Username</label>
                        <input
                            type="text"
                            name="Username"
                            value={form.Username}
                            onChange={handleChange}
                            onFocus={() => setFocused("Username")}
                            onBlur={() => setFocused("")}
                            placeholder="Enter your username"
                            style={inputStyle("Username")}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label style={labelStyle}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused("")}
                            placeholder="Enter your email address"
                            style={inputStyle("email")}
                        />
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-4">
                        <label style={labelStyle}>Mobile Number</label>
                        <input
                            type="tel"
                            name="MobileNumber"
                            maxLength={10}
                            value={form.MobileNumber}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    MobileNumber: e.target.value.replace(
                                        /\D/g,
                                        "",
                                    ),
                                })
                            }
                            onFocus={() => setFocused("MobileNumber")}
                            onBlur={() => setFocused("")}
                            placeholder="Enter 10-digit mobile number"
                            style={inputStyle("MobileNumber")}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label style={labelStyle}>Password</label>
                        <div style={{ position: "relative" }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="Password"
                                value={form.Password}
                                onChange={handleChange}
                                onFocus={() => setFocused("Password")}
                                onBlur={() => setFocused("")}
                                placeholder="Create a strong password"
                                style={{
                                    ...inputStyle("Password"),
                                    paddingRight: "44px",
                                }}
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: "absolute",
                                    right: "13px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "1.1rem",
                                    color: "#94a3b8",
                                    padding: "0",
                                }}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="mb-6">
                        <label style={labelStyle}>Role</label>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "8px",
                            }}
                        >
                            {roles.map((r) => (
                                <button
                                    key={r}
                                    onClick={() =>
                                        setForm({ ...form, Role: r })
                                    }
                                    style={{
                                        padding: "10px 0",
                                        borderRadius: "10px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontWeight: "600",
                                        fontSize: "0.85rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "6px",
                                        transition: "all 0.2s",
                                        background:
                                            form.Role === r
                                                ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                                                : "#f1f5f9",
                                        color:
                                            form.Role === r
                                                ? "#fff"
                                                : "#64748b",
                                        boxShadow:
                                            form.Role === r
                                                ? "0 4px 14px rgba(37,99,235,0.25)"
                                                : "none",
                                    }}
                                >
                                    {r === "Farmer" && "🌾"}
                                    {r === "Customer" && "🧑"}
                                    {r === "Provider" && "🛠️"}
                                    {r === "Admin" && "🛡️"}
                                    {r}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        onClick={handleSubmit}
                        style={{
                            width: "100%",
                            padding: "14px",
                            borderRadius: "12px",
                            border: "none",
                            cursor: "pointer",
                            background:
                                "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                            color: "#fff",
                            fontSize: "1rem",
                            fontWeight: "700",
                            letterSpacing: "0.03em",
                            boxShadow: "0 4px 18px rgba(37,99,235,0.30)",
                            transition: "transform 0.15s, box-shadow 0.15s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(-1px)";
                            e.currentTarget.style.boxShadow =
                                "0 6px 22px rgba(37,99,235,0.38)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                                "0 4px 18px rgba(37,99,235,0.30)";
                        }}
                    >
                        Create Account
                    </button>

                    {/* Terms */}
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "0.75rem",
                            color: "#94a3b8",
                            marginTop: "16px",
                        }}
                    >
                        By continuing, you agree to Kannect's{" "}
                        <span style={{ color: "#3b82f6", cursor: "pointer" }}>
                            Terms of Service
                        </span>
                    </p>
                </div>

                {/* Login Link */}
                <div style={{ textAlign: "center", marginTop: "18px" }}>
                    <span style={{ color: "#64748b", fontSize: "0.88rem" }}>
                        Already have an account?{" "}
                    </span>
                    <Link
                        to="/login"
                        style={{
                            color: "#3b82f6",
                            fontSize: "0.88rem",
                            fontWeight: "600",
                            textDecoration: "none",
                        }}
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
