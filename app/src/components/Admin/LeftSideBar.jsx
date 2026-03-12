import { useEffect, useState} from "react";

import DashBoardOverview from "../../pages/AdminDashboard/DashBoardOverview";
import Users from "../../pages/AdminDashboard/Users";
import Providers from "../../pages/AdminDashboard/Providers";
import Services from "../../pages/AdminDashboard/Services";
import Bookings from "../../pages/AdminDashboard/Bookings";
import Categories from "../../pages/AdminDashboard/Systems/Categories";
import Advertisements from "../../pages/AdminDashboard/Systems/Advertisements";
import SystemLogs from "../../pages/AdminDashboard/Systems/SystemLogs";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom';

const LeftSidebar = () => {
    const [active, setActive] = useState("Dashboard");
    const [collapsed, setCollapsed] = useState(false);
   const navigate = useNavigate();
   
   
   useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setCollapsed(true); // collapse on mobile
            } else {
                setCollapsed(false); // expand on desktop
            }
        };

        handleResize(); // run first time
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuSections = [
        {
            label: "MANAGEMENT",
            items: [
                {
                    name: "Dashboard",
                    icon: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    ),
                },
                {
                    name: "Users",
                    icon: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    ),
                },
                {
                    name: "Providers",
                    icon: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    ),
                },
                {
                    name: "Services",
                    icon: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                    ),
                },
                {
                    name: "Bookings",
                    icon: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect
                                x="3"
                                y="4"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                            />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    ),
                },
            ],
        },
        {
            label: "SYSTEM",
            items: [
                {
                    name: "Categories",
                    icon: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        </svg>
                    ),
                },
                {
                    name: "Advertisements",
                    icon: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    ),
                },
                {
                    name: "System Logs",
                    icon: (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    ),
                },
            ],
        },
    ];



 
    // LogoutAdmin
    const LogoutAdmin = ()=>{
        localStorage.clear();
      toast.success("logout success");
      navigate("/login");
      return;
    }



    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                width: "100vw",
                position: "sticky",
                top: 0,
                flexShrink: 0,
                fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
        >
            {/* ── Sidebar ── */}
            <div
                style={{
                    width: collapsed ? "68px" : "240px",
                    minHeight: "100vh",
                    background:
                        "linear-gradient(180deg, #0d1117 0%, #111827 100%)",
                    borderRight: "1px solid rgba(16,185,129,0.12)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
                    overflow: "hidden",
                    position: "relative",
                    flexShrink: 0,
                    
                }}
            >
                {/* Subtle green glow top */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "200px",
                        background:
                            "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />

                {/* ── Logo ── */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        display: collapsed ? "" : "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: collapsed ? "24px 16px" : "24px 20px",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        flexShrink: 0,
                        overflow: "hidden",
                    }}
                >
                    {/* Logo Icon */}
                    <div
                        style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "9px",
                            background:
                                "linear-gradient(135deg, #10b981, #059669)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1rem",
                            fontWeight: "900",
                            color: "#fff",
                            boxShadow: "0 0 16px rgba(16,185,129,0.40)",
                            flexShrink: 0,
                            letterSpacing: "-1px",
                        }}
                    >
                        K
                    </div>

                    {!collapsed && (
                        <div style={{ overflow: "hidden" }}>
                            <div
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: "800",
                                    color: "#fff",
                                    letterSpacing: "0.12em",
                                    lineHeight: 1,
                                }}
                            >
                                KANNECT
                            </div>
                            <div
                                style={{
                                    fontSize: "0.58rem",
                                    fontWeight: "600",
                                    color: "rgba(16,185,129,0.70)",
                                    letterSpacing: "0.18em",
                                    marginTop: "3px",
                                }}
                            >
                                CONTROL PANEL
                            </div>
                        </div>
                    )}

                    {/* Collapse toggle */}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            marginTop: collapsed ? "20px" : "",
                            marginLeft: collapsed ? "3px" : "auto",
                            width: "30px",
                            height: "30px",
                            borderRadius: "6px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "rgba(255,255,255,0.04)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(255,255,255,0.35)",
                            fontSize: "2rem",
                            paddingBottom: "6px",
                            flexShrink: 0,
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                "rgba(16,185,129,0.12)";
                            e.currentTarget.style.color = "#10b981";
                            e.currentTarget.style.borderColor =
                                "rgba(16,185,129,0.30)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                                "rgba(255,255,255,0.04)";
                            e.currentTarget.style.color =
                                "rgba(255,255,255,0.35)";
                            e.currentTarget.style.borderColor =
                                "rgba(255,255,255,0.08)";
                        }}
                    >
                        {collapsed ? "»" : "«"}
                    </button>
                </div>

                {/* ── Nav Menu ── */}
                <nav
                    style={{
                        flex: 1,
                        overflowY: "auto",
                        overflowX: "hidden",
                        padding: "16px 10px",
                        position: "relative",
                        zIndex: 1,
                        scrollbarWidth: "none",
                    }}
                >
                    <style>{`nav::-webkit-scrollbar { display: none; }`}</style>

                    {menuSections.map((section, si) => (
                        <div key={si} style={{ marginBottom: "24px" }}>
                            {/* Section Label */}
                            {!collapsed && (
                                <div
                                    style={{
                                        fontSize: "0.60rem",
                                        fontWeight: "700",
                                        color: "rgba(255,255,255,0.22)",
                                        letterSpacing: "0.16em",
                                        padding: "0 10px",
                                        marginBottom: "8px",
                                    }}
                                >
                                    {section.label}
                                </div>
                            )}
                            {collapsed && (
                                <div
                                    style={{
                                        height: "1px",
                                        background: "rgba(255,255,255,0.06)",
                                        margin: "0 4px 10px",
                                    }}
                                />
                            )}

                            {/* Items */}
                            {section.items.map((item, ii) => {
                                const isActive = active === item.name;
                                return (
                                    <button
                                        key={ii}
                                        onClick={() => setActive(item.name)}
                                        title={collapsed ? item.name : ""}
                                        style={{
                                            // width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            padding: collapsed
                                                ? "10px 13px"
                                                : "10px 12px",
                                            borderRadius: "10px",
                                            border: "none",
                                            cursor: "pointer",
                                            marginBottom: "3px",
                                            background: isActive
                                                ? "linear-gradient(135deg, rgba(16,185,129,0.18), rgba(5,150,105,0.12))"
                                                : "transparent",
                                            color: isActive
                                                ? "#10b981"
                                                : "rgba(255,255,255,0.45)",
                                            transition: "all 0.2s",
                                            position: "relative",
                                            overflow: "hidden",
                                            textAlign: "left",
                                            justifyContent: collapsed
                                                ? "center"
                                                : "flex-start",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background =
                                                    "rgba(255,255,255,0.05)";
                                                e.currentTarget.style.color =
                                                    "rgba(255,255,255,0.75)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background =
                                                    "transparent";
                                                e.currentTarget.style.color =
                                                    "rgba(255,255,255,0.45)";
                                            }
                                        }}
                                    >
                                        {/* Active left bar */}
                                        {isActive && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: "20%",
                                                    bottom: "20%",
                                                    width: "3px",
                                                    background:
                                                        "linear-gradient(180deg, #10b981, #059669)",
                                                    borderRadius: "0 3px 3px 0",
                                                    boxShadow:
                                                        "0 0 8px rgba(16,185,129,0.60)",
                                                }}
                                            />
                                        )}

                                        {/* Active glow bg */}
                                        {isActive && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    background:
                                                        "radial-gradient(ellipse at 0% 50%, rgba(16,185,129,0.10) 0%, transparent 70%)",
                                                    pointerEvents: "none",
                                                }}
                                            />
                                        )}

                                        {/* Icon */}
                                        <span
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                filter: isActive
                                                    ? "drop-shadow(0 0 6px rgba(16,185,129,0.70))"
                                                    : "none",
                                                transition: "filter 0.2s",
                                            }}
                                        >
                                            {item.icon}
                                        </span>

                                        {/* Label */}
                                        {!collapsed && (
                                            <span
                                                style={{
                                                    fontSize: "0.875rem",
                                                    fontWeight: isActive
                                                        ? "700"
                                                        : "500",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    transition: "all 0.2s",
                                                    letterSpacing: "0.01em",
                                                }}
                                            >
                                                {item.name}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </nav>

                {/* ── Logout ── */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        padding: "12px 10px 20px",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        flexShrink: 0,
                    }}
                >
                    <button
                    onClick={LogoutAdmin}
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: collapsed ? "10px 13px" : "10px 12px",
                            borderRadius: "10px",
                            border: "none",
                            cursor: "pointer",
                            background: "transparent",
                            color: "rgba(255,255,255,0.35)",
                            transition: "all 0.2s",
                            justifyContent: collapsed ? "center" : "flex-start",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                "rgba(239,68,68,0.10)";
                            e.currentTarget.style.color = "#f87171";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color =
                                "rgba(255,255,255,0.35)";
                        }}
                    >
                        {/* Logout Icon */}
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexShrink: 0,
                            }}
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                        </span>
                        {!collapsed && (
                            <span
                                style={{
                                    fontSize: "0.875rem",
                                    fontWeight: "600",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Logout
                            </span>
                        )}
                    </button>
                </div>
            </div>

          

            {/* right side contet */}
            <div
                //  style={{ flex: 1, minWidth: 0, background: "black", padding: "24px", overflow: "auto" }}
                style={{
                    flex: 1,
                    width: "100%",
                    background: "black",
                    overflowY: "auto",
                }}>

                {active === "Dashboard" ? <DashBoardOverview /> : ""}
                {active === "Users" ? <Users /> : ""}
                {active === "Providers" ? <Providers /> : ""}
                {active === "Services" ? <Services /> : ""}
                {active === "Bookings" ? <Bookings /> : ""}
                {/* system  */}
                {active === "Categories" ? <Categories /> : ""}
                {active === "Advertisements" ? <Advertisements /> : ""}
                {active === "System Logs" ? <SystemLogs /> : ""}
            </div>
        </div>
    );
};

export default LeftSidebar;
