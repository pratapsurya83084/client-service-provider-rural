import React, { useState } from "react";
import AdminNavbar from "./Navbar";

const SERVICES = [
    {
        id: 2,
        title: "tractor transport bussiness",
        category: "WATER TANKER",
        provider: "Patil_Agro",
        mobile: "7788334455",
        price: "₹1",
        district: "1",
        status: "ACTIVE",
        created: "11/2/2026",
    },
    {
        id: 1,
        title: "drone sprayer",
        category: "AGRICULTURE EQUIPMENT",
        provider: "Patil_Agro",
        mobile: "7788334455",
        price: "₹2000",
        district: "12233",
        status: "ACTIVE",
        created: "11/2/2026",
    },
];

const CATEGORY_COLORS = {
    "WATER TANKER": { text: "#22d3ee", border: "#22d3ee" },
    "AGRICULTURE EQUIPMENT": { text: "#4ade80", border: "#4ade80" },
    ELECTRICAL: { text: "#facc15", border: "#facc15" },
};

const Services = () => {
    const [search, setSearch] = useState("");
    const [services, setServices] = useState(SERVICES);
    const [deactivated, setDeactivated] = useState({});

    const filtered = services.filter((s) => {
        const q = search.toLowerCase();
        return (
            s.title.toLowerCase().includes(q) ||
            s.provider.toLowerCase().includes(q) ||
            s.category.toLowerCase().includes(q)
        );
    });

    const toggleDeactivate = (id) => {
        setDeactivated((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div>
            <AdminNavbar />
            <div
                className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 py-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');`}</style>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-[26px] font-extrabold text-[#e6edf3] tracking-tight">
                        All Services
                    </h1>
                    <p className="text-[13px] text-[#4ade80] mt-1 font-medium">
                        {filtered.length} services in database
                    </p>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by title or provider..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] placeholder-[#484f58] rounded-md px-4 py-2 text-[13px] outline-none focus:border-[#4ade80] transition-colors duration-150 w-full max-w-[280px]"
                    />
                </div>

                {/* Table */}
                <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px] border-collapse">
                            <thead>
                                <tr className="border-b border-[#21262d]">
                                    {[
                                        "ID",
                                        "TITLE",
                                        "CATEGORY",
                                        "PROVIDER",
                                        "MOBILE",
                                        "PRICE",
                                        "DISTRICT",
                                        "STATUS",
                                        "CREATED",
                                        "ACTION",
                                    ].map((h) => (
                                        <th
                                            key={h}
                                            className="text-left px-4 py-3 text-[11px] font-bold text-[#484f58] tracking-[0.08em] whitespace-nowrap"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={10}
                                            className="text-center text-[#484f58] py-10 text-[13px]"
                                        >
                                            No services found.
                                        </td>
                                    </tr>
                                ) : (
                                    filtered.map((s, i) => {
                                        const catColor = CATEGORY_COLORS[
                                            s.category
                                        ] || {
                                            text: "#8b949e",
                                            border: "#8b949e",
                                        };
                                        const isDeactivated = deactivated[s.id];

                                        return (
                                            <tr
                                                key={s.id}
                                                className="border-b border-[#21262d] hover:bg-[#1c2128] transition-colors duration-150"
                                                style={{
                                                    animation: `fadeUp 0.3s ${i * 0.05}s ease both`,
                                                }}
                                            >
                                                {/* ID */}
                                                <td
                                                    className="px-4 py-4 text-[13px] font-bold text-[#4ade80]"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    #{s.id}
                                                </td>

                                                {/* Title */}
                                                <td className="px-4 py-4 text-[13.5px] font-semibold text-[#e6edf3] capitalize">
                                                    {s.title}
                                                </td>

                                                {/* Category badge */}
                                                <td className="px-4 py-4">
                                                    <span
                                                        className="text-[10px] font-bold px-2.5 py-1 rounded border tracking-[0.05em] whitespace-nowrap"
                                                        style={{
                                                            color: catColor.text,
                                                            borderColor:
                                                                catColor.border,
                                                            background:
                                                                "transparent",
                                                        }}
                                                    >
                                                        {s.category}
                                                    </span>
                                                </td>

                                                {/* Provider */}
                                                <td className="px-4 py-4 text-[13px] text-[#c9d1d9]">
                                                    {s.provider}
                                                </td>

                                                {/* Mobile */}
                                                <td
                                                    className="px-4 py-4 text-[12.5px] text-[#8b949e]"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {s.mobile}
                                                </td>

                                                {/* Price */}
                                                <td
                                                    className="px-4 py-4 text-[13px] font-bold text-[#4ade80]"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {s.price}
                                                </td>

                                                {/* District */}
                                                <td
                                                    className="px-4 py-4 text-[13px] text-[#8b949e]"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {s.district}
                                                </td>

                                                {/* Status */}
                                                <td className="px-4 py-4">
                                                    <span
                                                        className="text-[11px] font-bold px-2.5 py-1 rounded border tracking-[0.05em]"
                                                        style={{
                                                            color: isDeactivated
                                                                ? "#f85149"
                                                                : "#4ade80",
                                                            borderColor:
                                                                isDeactivated
                                                                    ? "#f85149"
                                                                    : "#4ade80",
                                                            background:
                                                                "transparent",
                                                        }}
                                                    >
                                                        {isDeactivated
                                                            ? "INACTIVE"
                                                            : s.status}
                                                    </span>
                                                </td>

                                                {/* Created */}
                                                <td
                                                    className="px-4 py-4 text-[12.5px] text-[#8b949e]"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {s.created}
                                                </td>

                                                {/* Action */}
                                                <td className="px-4 py-4">
                                                    <button
                                                        onClick={() =>
                                                            toggleDeactivate(
                                                                s.id,
                                                            )
                                                        }
                                                        className="text-[12px] font-bold px-3 py-1.5 rounded border transition-all duration-150 cursor-pointer"
                                                        style={
                                                            isDeactivated
                                                                ? {
                                                                      color: "#4ade80",
                                                                      borderColor:
                                                                          "#4ade80",
                                                                      background:
                                                                          "transparent",
                                                                  }
                                                                : {
                                                                      color: "#f85149",
                                                                      borderColor:
                                                                          "#f85149",
                                                                      background:
                                                                          "transparent",
                                                                  }
                                                        }
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.background =
                                                                isDeactivated
                                                                    ? "#4ade80"
                                                                    : "#f85149";
                                                            e.currentTarget.style.color =
                                                                "#0d1117";
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.background =
                                                                "transparent";
                                                            e.currentTarget.style.color =
                                                                isDeactivated
                                                                    ? "#4ade80"
                                                                    : "#f85149";
                                                        }}
                                                    >
                                                        {isDeactivated
                                                            ? "Activate"
                                                            : "Deactivate"}
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            </div>
        </div>
    );
};

export default Services;
