import { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Services from "../pages/Users/Services/Services";
import Login from "../pages/Login";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // const navLinks = ["Home", "Services", "How It Works", "About", "Contact"];
    const farmerTab = [
        { name: "Dashboard", path: "/dashboard-user" },
        { name: "Services", path: "/services" },
        { name: "Bookings", path: "/bookings" },
        { name: "Profile", path: "/profile" },
    ];
    const providerTab = [
        {name:"Dashboard",path:"/dashboard-provider"},
    {   name: "MyServices",path:"/myservices"},
      { name: "Add Service",path:"/addservicebyprovider"},
      { name: "Request",path:"/userrequestoproviderforbooking"},
     {  name: "Profile",path:"/providerprofile"}
    ];

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

    const User = JSON.parse(localStorage.getItem("userAuth"));
    const token = localStorage.getItem("token");
    // console.log(User);
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
                    <Link
                        to="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "9px",
                            flexShrink: 0,
                        }}
                    >
                        <div
                            style={{
                                width: isMobile ? "34px" : "40px",
                                height: isMobile ? "34px" : "40px",
                                borderRadius: "10px",
                                background:
                                    "linear-gradient(135deg, #2563eb, #3b82f6)",
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
                                background:
                                    "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                lineHeight: 1,
                            }}
                        >
                            Kannect
                        </span>
                    </Link>

                    {/* ── Desktop Nav Links for farmer or customer ── */}
                    {!isMobile && User?.[0].role === "Farmer" && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2px",
                            }}
                        >
                            {farmerTab?.map((link) => (
                                <Link
                                    to={`${link?.path}`} 
                                    key={link.name}
                                    onClick={() => setActiveLink(link)}
                                    style={{
                                        position: "relative",
                                        padding: "8px 14px",
                                        borderRadius: "8px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "0.9rem",
                                        fontWeight:
                                            activeLink === link.name ? "700" : "500",
                                        background:
                                            activeLink === link.name
                                                ? "linear-gradient(135deg, #eff6ff, #dbeafe)"
                                                : "transparent",
                                        color:
                                            activeLink === link.name
                                                ? "#2563eb"
                                                : "#4b5563",
                                        transition: "all 0.2s",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeLink !== link.name) {
                                            e.currentTarget.style.background =
                                                "#f8fafc";
                                            e.currentTarget.style.color =
                                                "#2563eb";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeLink !== link.name){
                                            e.currentTarget.style.background =
                                                "transparent";
                                            e.currentTarget.style.color =
                                                "#4b5563";
                                        }
                                    }}
                                >
                                    {link?.name}
                                    {activeLink === link?.name && (
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: "5px",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                width: "16px",
                                                height: "2.5px",
                                                borderRadius: "2px",
                                                background:
                                                    "linear-gradient(90deg, #2563eb, #3b82f6)",
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* provider Nav Links for Provider */}
                    {!isMobile && User?.[0].role === "Provider" && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2px",
                            }}
                        >
                            {providerTab?.map((link) => (
                                <Link 
                                     to={`${link?.path}`} 
                                    key={link?.name}
                                    onClick={() => setActiveLink(link)}
                                    style={{
                                        position: "relative",
                                        padding: "8px 14px",
                                        borderRadius: "8px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "0.9rem",
                                        fontWeight:
                                            activeLink === link.name ? "700" : "500",
                                        background:
                                            activeLink === link.name
                                                ? "linear-gradient(135deg, #eff6ff, #dbeafe)"
                                                : "transparent",
                                        color:
                                            activeLink === link.name
                                                ? "#2563eb"
                                                : "#4b5563",
                                        transition: "all 0.2s",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeLink !== link.name) {
                                            e.currentTarget.style.background =
                                                "#f8fafc";
                                            e.currentTarget.style.color =
                                                "#2563eb";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeLink !== link.name) {
                                            e.currentTarget.style.background =
                                                "transparent";
                                            e.currentTarget.style.color =
                                                "#4b5563";
                                        }
                                    }}
                                >
                                    {link.name}
                                    {activeLink === link.name && (
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: "5px",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                width: "16px",
                                                height: "2.5px",
                                                borderRadius: "2px",
                                                background:
                                                    "linear-gradient(90deg, #2563eb, #3b82f6)",
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* ── Desktop  Getstarted button and SignIn ── */}
                    {/* {!isMobile && ( */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            flexShrink: 0,
                        }}
                    >
                        {!token && (
                            <Link to={"/login"}>
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
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.background =
                                            "#eff6ff")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.background =
                                            "transparent")
                                    }
                                >
                                    Sign In
                                </button>
                            </Link>
                        )}

                        {/* if provider then add route of create service */}
                        {token && User?.[0].role !== "Admin" && (
                            <Link
                                to={`${User?.[0].role === "Farmer" ? "/dashboard-user" : "/dashboard-provider"}`}
                            >
                                <button
                                    style={{
                                        padding: "9px 20px",
                                        borderRadius: "9px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "0.88rem",
                                        fontWeight: "700",
                                        background:
                                            "linear-gradient(135deg, #2563eb, #3b82f6)",
                                        color: "#fff",
                                        boxShadow:
                                            "0 4px 14px rgba(37,99,235,0.28)",
                                        transition: "all 0.2s",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform =
                                            "translateY(-1px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 6px 18px rgba(37,99,235,0.38)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform =
                                            "translateY(0)";
                                        e.currentTarget.style.boxShadow =
                                            "0 4px 14px rgba(37,99,235,0.28)";
                                    }}
                                >
                                    Get Started 🚀
                                </button>
                            </Link>
                        )}

                        {token && User?.[0].role === "Admin" && (
                            <Link to={"/dashboard"}>
                                <button
                                    style={{
                                        padding: "9px 20px",
                                        borderRadius: "9px",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "0.88rem",
                                        fontWeight: "700",
                                        background:
                                            "linear-gradient(135deg, #2563eb, #3b82f6)",
                                        color: "#fff",
                                        boxShadow:
                                            "0 4px 14px rgba(37,99,235,0.28)",
                                        transition: "all 0.2s",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform =
                                            "translateY(-1px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 6px 18px rgba(37,99,235,0.38)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform =
                                            "translateY(0)";
                                        e.currentTarget.style.boxShadow =
                                            "0 4px 14px rgba(37,99,235,0.28)";
                                    }}
                                >
                                    Admin Dashboard 🚀
                                </button>
                            </Link>
                        )}
                    </div>
                    {/* )} */}
                </div>
            </nav>

            {/* Spacer */}
            <div style={{ height: isMobile ? "60px" : "70px" }} />
        </>
    );
};

export default NavBar;
