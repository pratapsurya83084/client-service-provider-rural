import React, { useState } from "react";

const INITIAL_CATEGORIES = [
    {
        id: 1,
        name: "Agriculture Equipment",
        description: "Tractors, harvesters, ploughs and farming tools",
    },
    {
        id: 2,
        name: "Water Tanker",
        description: "Water delivery and tanker services",
    },
    {
        id: 3,
        name: "Electrical Repair",
        description: "Wiring, motor repair and electrical work",
    },
    {
        id: 4,
        name: "Construction Help",
        description: "Masons, laborers and building services",
    },
    {
        id: 5,
        name: "Plumbing",
        description: "Pipe fitting, borewell and water supply",
    },
    {
        id: 6,
        name: "Transport",
        description: "Goods transport and vehicle hire",
    },
];

const Categories = () => {
    const [categories, setCategories] = useState(INITIAL_CATEGORIES);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [nextId, setNextId] = useState(7);
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editDesc, setEditDesc] = useState("");

    const handleAdd = () => {
        if (!name.trim()) return;
        setCategories((prev) => [
            ...prev,
            { id: nextId, name: name.trim(), description: desc.trim() },
        ]);
        setNextId((n) => n + 1);
        setName("");
        setDesc("");
    };

    const handleDelete = (id) =>
        setCategories((prev) => prev.filter((c) => c.id !== id));

    const startEdit = (c) => {
        setEditingId(c.id);
        setEditName(c.name);
        setEditDesc(c.description);
    };

    const saveEdit = (id) => {
        if (!editName.trim()) return;
        setCategories((prev) =>
            prev.map((c) =>
                c.id === id
                    ? {
                          ...c,
                          name: editName.trim(),
                          description: editDesc.trim(),
                      }
                    : c,
            ),
        );
        setEditingId(null);
    };

    return (
        <div
            className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 py-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cat-row { animation: fadeUp 0.3s ease both; }
        .dark-input {
          background: #0d1117;
          border: 1px solid #30363d;
          color: #c9d1d9;
          border-radius: 6px;
          padding: 10px 14px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.15s;
          width: 100%;
        }
        .dark-input::placeholder { color: #484f58; }
        .dark-input:focus { border-color: #4ade80; }
      `}</style>

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-[26px] font-extrabold text-[#e6edf3] tracking-tight">
                    Manage Categories
                </h1>
                <p className="text-[13px] text-[#4ade80] mt-1 font-medium">
                    {categories.length} categories
                </p>
            </div>

            {/* Add Category card */}
            <div className="bg-[#161b22] border border-[#21262d] rounded-xl px-5 py-5 mb-5">
                <p className="text-[11px] font-bold text-[#4ade80] tracking-[0.1em] mb-4">
                    ADD CATEGORY
                </p>
                <div className="flex flex-wrap gap-3 items-end">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5 flex-1 min-w-[180px]">
                        <label className="text-[10px] font-bold text-[#484f58] tracking-[0.08em] uppercase">
                            Name
                        </label>
                        <input
                            className="dark-input"
                            placeholder="Category name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-1.5 flex-[3] min-w-[240px]">
                        <label className="text-[10px] font-bold text-[#484f58] tracking-[0.08em] uppercase">
                            Description
                        </label>
                        <input
                            className="dark-input"
                            placeholder="Optional description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                        />
                    </div>

                    {/* Add button */}
                    <button
                        onClick={handleAdd}
                        disabled={!name.trim()}
                        className="bg-[#4ade80] hover:bg-[#22c55e] disabled:bg-[#1a3a2a] disabled:text-[#2d6a4f] disabled:cursor-not-allowed text-[#0d1117] font-bold text-[13px] px-6 py-[10px] rounded-md transition-colors duration-150 cursor-pointer self-end whitespace-nowrap"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                            <tr className="border-b border-[#21262d]">
                                {["ID", "NAME", "DESCRIPTION", "ACTIONS"].map(
                                    (h) => (
                                        <th
                                            key={h}
                                            className="text-left px-4 py-3 text-[11px] font-bold text-[#484f58] tracking-[0.08em] whitespace-nowrap"
                                            style={
                                                h === "DESCRIPTION"
                                                    ? { width: "50%" }
                                                    : {}
                                            }
                                        >
                                            {h}
                                        </th>
                                    ),
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {categories.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="text-center text-[#484f58] py-10 text-[13px]"
                                    >
                                        No categories yet.
                                    </td>
                                </tr>
                            ) : (
                                categories.map((c, i) => (
                                    <tr
                                        key={c.id}
                                        className="cat-row border-b border-[#21262d] last:border-b-0 hover:bg-[#1c2128] transition-colors duration-150"
                                        style={{
                                            animationDelay: `${i * 0.04}s`,
                                        }}
                                    >
                                        {/* ID */}
                                        <td
                                            className="px-4 py-4 text-[13px] font-bold text-[#4ade80] whitespace-nowrap"
                                            style={{
                                                fontFamily:
                                                    "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            #{c.id}
                                        </td>

                                        {/* Name */}
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            {editingId === c.id ? (
                                                <input
                                                    className="dark-input"
                                                    value={editName}
                                                    onChange={(e) =>
                                                        setEditName(
                                                            e.target.value,
                                                        )
                                                    }
                                                    onKeyDown={(e) =>
                                                        e.key === "Enter" &&
                                                        saveEdit(c.id)
                                                    }
                                                    style={{ minWidth: 160 }}
                                                    autoFocus
                                                />
                                            ) : (
                                                <span className="text-[13.5px] font-semibold text-[#e6edf3]">
                                                    {c.name}
                                                </span>
                                            )}
                                        </td>

                                        {/* Description */}
                                        <td className="px-4 py-4">
                                            {editingId === c.id ? (
                                                <input
                                                    className="dark-input"
                                                    value={editDesc}
                                                    onChange={(e) =>
                                                        setEditDesc(
                                                            e.target.value,
                                                        )
                                                    }
                                                    onKeyDown={(e) =>
                                                        e.key === "Enter" &&
                                                        saveEdit(c.id)
                                                    }
                                                />
                                            ) : (
                                                <span className="text-[13px] text-[#8b949e]">
                                                    {c.description || "—"}
                                                </span>
                                            )}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                {editingId === c.id ? (
                                                    <>
                                                        <button
                                                            onClick={() =>
                                                                saveEdit(c.id)
                                                            }
                                                            className="text-[12px] font-bold px-3 py-1.5 rounded border border-[#4ade80] text-[#4ade80] bg-transparent hover:bg-[#4ade80] hover:text-[#0d1117] transition-all duration-150 cursor-pointer"
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                setEditingId(
                                                                    null,
                                                                )
                                                            }
                                                            className="text-[12px] font-bold px-3 py-1.5 rounded border border-[#30363d] text-[#8b949e] bg-transparent hover:border-[#8b949e] transition-all duration-150 cursor-pointer"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() =>
                                                                startEdit(c)
                                                            }
                                                            className="text-[12px] font-bold px-3 py-1.5 rounded border border-[#30363d] text-[#8b949e] bg-transparent hover:border-[#c9d1d9] hover:text-[#c9d1d9] transition-all duration-150 cursor-pointer"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    c.id,
                                                                )
                                                            }
                                                            className="text-[12px] font-bold px-3 py-1.5 rounded border border-[#f85149] text-[#f85149] bg-transparent hover:bg-[#f85149] hover:text-[#0d1117] transition-all duration-150 cursor-pointer"
                                                        >
                                                            Del
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Categories;
