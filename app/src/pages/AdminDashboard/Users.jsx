import React, { useState } from "react";
import Navbar from "./Navbar";

const USERS = [
    {
        id: 7,
        name: "vivek",
        mobile: "9309872426",
        email: "",
        role: "CUSTOMER",
        status: "ACTIVE",
        approved: true,
        joined: "23/2/2026",
    },
    {
        id: 6,
        name: "vh",
        mobile: "2134567890",
        email: "",
        role: "CUSTOMER",
        status: "ACTIVE",
        approved: true,
        joined: "12/2/2026",
    },
    {
        id: 5,
        name: "dronwala",
        mobile: "7788334455",
        email: "dronwala@kannect.com",
        role: "PROVIDER",
        status: "ACTIVE",
        approved: true,
        joined: "11/2/2026",
    },
    {
        id: 4,
        name: "User",
        mobile: "8894449993",
        email: "",
        role: "CUSTOMER",
        status: "ACTIVE",
        approved: true,
        joined: "11/2/2026",
    },
    {
        id: 3,
        name: "vk",
        mobile: "1133224455",
        email: "",
        role: "PROVIDER",
        status: "ACTIVE",
        approved: true,
        joined: "11/2/2026",
    },
    {
        id: 2,
        name: "Test Customer",
        mobile: "9876543210",
        email: "",
        role: "CUSTOMER",
        status: "ACTIVE",
        approved: true,
        joined: "11/2/2026",
    },
    {
        id: 1,
        name: "System Admin",
        mobile: "0000000000",
        email: "admin@kannect.com",
        role: "ADMIN",
        status: "ACTIVE",
        approved: true,
        joined: "1/1/2026",
    },
];

const ROLE_COLORS = {
    CUSTOMER: { color: "#4ade80", border: "#4ade80" },
    PROVIDER: { color: "#facc15", border: "#facc15" },
    ADMIN: { color: "#60a5fa", border: "#60a5fa" },
};

const Users = () => {
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [users, setUsers] = useState(USERS);
    const [suspended, setSuspended] = useState({});

    const filtered = users.filter((u) => {
        const q = search.toLowerCase();
        const matchSearch =
            u.name.toLowerCase().includes(q) ||
            u.mobile.includes(q) ||
            u.email.toLowerCase().includes(q);
        const matchRole =
            roleFilter === "All" || u.role === roleFilter.toUpperCase();
        return matchSearch && matchRole;
    });

    const toggleSuspend = (id) => {
        setSuspended((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="w-full">
            {/* navbar */}
            {/* <Navbar /> */}

            <div style={s.page}>
                <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #0d1117; }

        .search-input {
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 6px;
          color: #c9d1d9;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          padding: 8px 14px;
          outline: none;
          width: 100%;
          max-width: 260px;
          transition: border-color 0.2s;
        }
        .search-input::placeholder { color: #484f58; }
        .search-input:focus { border-color: #4ade80; }

        .filter-btn {
          border-radius: 5px;
          padding: 7px 16px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          border: 1px solid #30363d;
          background: transparent;
          color: #8b949e;
          transition: all 0.15s;
          letter-spacing: 0.03em;
        }
        .filter-btn:hover { border-color: #4ade80; color: #4ade80; }
        .filter-btn.active {
          background: transparent;
          border-color: #4ade80;
          color: #4ade80;
        }

        .tbl-row {
          border-bottom: 1px solid #21262d;
          transition: background 0.15s;
        }
        .tbl-row:hover { background: #161b22; }

        .badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.04em;
          border-width: 1px;
          border-style: solid;
          background: transparent;
        }

        .suspend-btn {
          padding: 5px 14px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          border: 1.5px solid;
          transition: all 0.15s;
          letter-spacing: 0.03em;
        }
        .suspend-btn.active-suspend {
          border-color: #f85149;
          color: #f85149;
          background: transparent;
        }
        .suspend-btn.active-suspend:hover {
          background: #f85149;
          color: #fff;
        }
        .suspend-btn.restore {
          border-color: #4ade80;
          color: #4ade80;
          background: transparent;
        }
        .suspend-btn.restore:hover {
          background: #4ade80;
          color: #0d1117;
        }

        .tbl-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 820px;
        }
        th {
          text-align: left;
          padding: 12px 16px;
          font-size: 11px;
          font-weight: 700;
          color: #484f58;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.08em;
          border-bottom: 1px solid #21262d;
          white-space: nowrap;
        }
        td {
          padding: 14px 16px;
          font-size: 13.5px;
          color: #c9d1d9;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
          vertical-align: middle;
        }
        td.mono {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: #8b949e;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .row-anim { animation: fadeIn 0.3s ease both; }

        @media (max-width: 640px) {
          .top-controls { flex-direction: column; align-items: flex-start !important; gap: 10px !important; }
          .search-input { max-width: 100%; }
        }
      `}</style>

                {/* Header */}
                <div style={s.header}>
                    <h1 style={s.title}>Manage Users</h1>
                    <p style={s.count}>{filtered.length} users found</p>
                </div>

                {/* Controls */}
                <div className="top-controls" style={s.controls}>
                    <input
                        className="search-input"
                        placeholder="Search by name, mobile, email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {["All", "Customer", "Provider", "Admin"].map((r) => (
                            <button
                                key={r}
                                className={`filter-btn ${roleFilter === r ? "active" : ""}`}
                                onClick={() => setRoleFilter(r)}
                            >
                                {r}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div style={s.tableCard}>
                    <div className="tbl-wrap">
                        <table>
                            <thead>
                                <tr>
                                    {[
                                        "ID",
                                        "NAME",
                                        "MOBILE",
                                        "EMAIL",
                                        "ROLE",
                                        "STATUS",
                                        "APPROVED",
                                        "JOINED",
                                        "ACTIONS",
                                    ].map((h) => (
                                        <th key={h}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={9}
                                            style={{
                                                textAlign: "center",
                                                color: "#484f58",
                                                padding: "32px",
                                            }}
                                        >
                                            No users found.
                                        </td>
                                    </tr>
                                ) : (
                                    filtered.map((u, i) => {
                                        const rc = ROLE_COLORS[u.role];
                                        const isSuspended = suspended[u.id];
                                        return (
                                            <tr
                                                key={u.id}
                                                className="tbl-row row-anim"
                                                style={{
                                                    animationDelay: `${i * 0.04}s`,
                                                }}
                                            >
                                                <td
                                                    className="mono"
                                                    style={{
                                                        color: "#4ade80",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    #{u.id}
                                                </td>
                                                <td
                                                    style={{
                                                        fontWeight: 600,
                                                        color: "#e6edf3",
                                                    }}
                                                >
                                                    {u.name}
                                                </td>
                                                <td className="mono">
                                                    {u.mobile}
                                                </td>
                                                <td className="mono">
                                                    {u.email || "—"}
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge"
                                                        style={{
                                                            color: rc.color,
                                                            borderColor:
                                                                rc.border,
                                                        }}
                                                    >
                                                        {u.role}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge"
                                                        style={{
                                                            color: isSuspended
                                                                ? "#f85149"
                                                                : "#4ade80",
                                                            borderColor:
                                                                isSuspended
                                                                    ? "#f85149"
                                                                    : "#4ade80",
                                                        }}
                                                    >
                                                        {isSuspended
                                                            ? "SUSPENDED"
                                                            : u.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="badge"
                                                        style={{
                                                            color: "#4ade80",
                                                            borderColor:
                                                                "#4ade80",
                                                        }}
                                                    >
                                                        YES
                                                    </span>
                                                </td>
                                                <td className="mono">
                                                    {u.joined}
                                                </td>
                                                <td>
                                                    {u.role !== "ADMIN" && (
                                                        <button
                                                            className={`suspend-btn ${isSuspended ? "restore" : "active-suspend"}`}
                                                            onClick={() =>
                                                                toggleSuspend(
                                                                    u.id,
                                                                )
                                                            }
                                                        >
                                                            {isSuspended
                                                                ? "Restore"
                                                                : "Suspend"}
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const s = {
    page: {
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        fontFamily: "'DM Sans', sans-serif",
        padding: "32px 24px",
    },
    header: {
        marginBottom: 22,
    },
    title: {
        fontSize: 26,
        fontWeight: 800,
        color: "#e6edf3",
        letterSpacing: "-0.4px",
    },
    count: {
        fontSize: 13,
        color: "#4ade80",
        marginTop: 4,
        fontWeight: 500,
    },
    controls: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 24,
        flexWrap: "wrap",
    },
    tableCard: {
        background: "#161b22",
        borderRadius: 10,
        border: "1px solid #21262d",
        overflow: "hidden",
    },
};

export default Users;
