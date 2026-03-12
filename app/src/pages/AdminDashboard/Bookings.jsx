import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../../AdminContext/CreateAdminContext";
import { toast, Toaster } from "react-hot-toast";

const BOOKINGS = [
    {
        id: 1,
        service: "drone sprayer",
        customer: "User",
        mobile: "8894449993",
        provider: "Patil_Agro",
        date: "11/2/2026",
        status: "COMPLETED",
        address: "pune,3sector ,west corner ,kannect office",
        created: "11/2/2026",
    },
    {
        id: 2,
        service: "tractor transport bussiness",
        customer: "vivek",
        mobile: "9309872426",
        provider: "Patil_Agro",
        date: "12/2/2026",
        status: "PENDING",
        address: "mumbai, andheri east, near station",
        created: "12/2/2026",
    },
    {
        id: 3,
        service: "water pump rental",
        customer: "Test Customer",
        mobile: "9876543210",
        provider: "waterpro",
        date: "13/2/2026",
        status: "CONFIRMED",
        address: "nashik, college road, shop no 5",
        created: "13/2/2026",
    },
    {
        id: 4,
        service: "soil testing kit",
        customer: "vk",
        mobile: "1133224455",
        provider: "agritech",
        date: "14/2/2026",
        status: "INPROGRESS",
        address: "aurangabad, cidco n6, block b",
        created: "14/2/2026",
    },
    {
        id: 5,
        service: "electric fence setup",
        customer: "vh",
        mobile: "2134567890",
        provider: "voltfarm",
        date: "15/2/2026",
        status: "CANCELLED",
        address: "solapur, market yard, warehouse 3",
        created: "15/2/2026",
    },
];

const STATUS_STYLES = {
    PENDING: { color: "#facc15", border: "#facc15" },
    CONFIRMED: { color: "#60a5fa", border: "#60a5fa" },
    INPROGRESS: { color: "#fb923c", border: "#fb923c" },
    COMPLETED: { color: "#4ade80", border: "#4ade80" },
    CANCELLED: { color: "#f85149", border: "#f85149" },
};

const FILTERS = [
    "All",
    "Pending",
    "Confirmed",
    "InProgress",
    "Completed",
    "Cancelled",
];

const Bookings = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [bookings, setBookings] = useState([]);

    const { FetchBookings, DeleteBookingsByAdmin } = useContext(AdminContext);

    const token = localStorage.getItem("token");

    async function fetchBookings() {
        if (!token) {
            toast.error("token expired ,Login Please");
            return;
        }
        try {
            const res = await FetchBookings(token);
            if (res.success) {
                setBookings(res.data);
                // console.log("Bookings list :", res.data);
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("Error while fetching Bookings : ", error);
        }
    }

    useEffect(() => {
        fetchBookings();
    }, []);

    const filtered = bookings?.filter((b) => {
        const q = search.toLowerCase();
        const matchSearch =
            b.address.toLowerCase().includes(q) ||
            b.notes.toLowerCase().includes(q) ||
            b.status.includes(q);

        const matchFilter =
            filter === "All" || b.status === filter.toUpperCase();
        return matchSearch && matchFilter;
    });

    const handelDelete = async (bid) => {
        // alert("booking id : " + bid);
        if (!token) {
            toast.error("unauthorized user ,please login as Admin");
            return;
        }
        try {
            const res = await DeleteBookingsByAdmin(token, bid);
            if (res.success) {
                // console.log(res);
                toast.success(res.message);
                fetchBookings();
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {}
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
        .b-row { animation: fadeUp 0.3s ease both; }
      `}</style>
            <Toaster position="top-center" reverseOrder={false} />
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-[26px] font-extrabold text-[#e6edf3] tracking-tight">
                    All Bookings
                </h1>
                <p className="text-[13px] text-[#4ade80] mt-1 font-medium">
                    {filtered.length} booking{filtered.length !== 1 ? "s" : ""}{" "}
                    in database
                </p>
            </div>

            {/* Search + filters row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
                <input
                    type="text"
                    placeholder="Search by customer or service..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] placeholder-[#484f58] rounded-md px-4 py-2 text-[13px] outline-none focus:border-[#4ade80] transition-colors duration-150 w-full max-w-[260px]"
                />

                <div className="flex flex-wrap gap-2">
                    {FILTERS.map((f) => {
                        const active = filter === f;
                        const st = STATUS_STYLES[f.toUpperCase()] || null;
                        return (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className="text-[12px] font-semibold px-3.5 py-1.5 rounded border transition-all duration-150 cursor-pointer"
                                style={
                                    active && st
                                        ? {
                                              color: st.color,
                                              borderColor: st.border,
                                              background: "transparent",
                                          }
                                        : active
                                          ? {
                                                color: "#4ade80",
                                                borderColor: "#4ade80",
                                                background: "transparent",
                                            }
                                          : {
                                                color: "#8b949e",
                                                borderColor: "#30363d",
                                                background: "transparent",
                                            }
                                }
                            >
                                {f}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] border-collapse">
                        <thead>
                            <tr className="border-b border-[#21262d]">
                                {[
                                    "ID",
                                    "SERVICE",
                                    "DESCRIPTION",
                                    "CUSTOMER",
                                    "MOBILE",
                                    "DATE",
                                    "STATUS",
                                    "ADDRESS",
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
                            {filtered?.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={9}
                                        className="text-center text-[#484f58] py-10 text-[13px]"
                                    >
                                        No bookings found.
                                    </td>
                                </tr>
                            ) : (
                                filtered?.map((b, i) => {
                                    // const st = STATUS_STYLES[b.status] || {
                                    //     color: "#8b949e",
                                    //     border: "#8b949e",
                                    // };
                                    return (
                                        <tr
                                            key={b?.id}
                                            className="b-row border-b border-[#21262d] last:border-b-0 hover:bg-[#1c2128] transition-colors duration-150"
                                            style={{
                                                animationDelay: `${i * 0.05}s`,
                                            }}
                                        >
                                            <td
                                                className="px-4 py-4 text-[13px] font-bold text-[#4ade80]"
                                                style={{
                                                    fontFamily:
                                                        "'JetBrains Mono', monospace",
                                                }}
                                            >
                                                #{b?.bookingId}
                                            </td>
                                            <td className="px-4 py-4 text-[13.5px] font-semibold text-[#e6edf3] capitalize">
                                                {b?.title}
                                            </td>
                                            <td className="px-4 py-4 text-[13px] text-[#c9d1d9]">
                                                {b?.description}
                                            </td>
                                            <td
                                                className="px-4 py-4 text-[12.5px] text-[#8b949e]"
                                                style={{
                                                    fontFamily:
                                                        "'JetBrains Mono', monospace",
                                                }}
                                            >
                                                {b?.userName}
                                            </td>
                                            {/* <td className="px-4 py-4 text-[13px] text-[#c9d1d9]">
                                              <button>view booking</button>
                                            </td> */}
                                            <td
                                                className="px-4 py-4 text-[12.5px] text-[#8b949e]"
                                                style={{
                                                    fontFamily:
                                                        "'JetBrains Mono', monospace",
                                                }}
                                            >
                                                {b?.mobileNumber}
                                                {/* {new Date(b.bookingDate).toDateString()} */}
                                            </td>

                                            <td className="px-4 py-4">
                                                <span className="text-[11px] font-bold px-2.5 py-1  whitespace-nowrap">
                                                    {new Date(
                                                        b?.date,
                                                    ).toDateString()}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 text-[12.5px] text-[#8b949e] max-w-[220px]">
                                                {b?.status}
                                            </td>

                                            <td className="px-4 py-4 text-[12.5px] text-[#8b949e] max-w-[220px]">
                                                {b?.address}
                                            </td>
                                            <td className="px-4 py-4 text-[12.5px] text-[#8b949e] max-w-[220px]">
                                                <button
                                                    onClick={(e) =>
                                                        handelDelete(
                                                            b?.bookingId,
                                                        )
                                                    }
                                                    className="px-2 py-1 bg-red-500 rounded-lg text-black cursor-pointer"
                                                >
                                                    {" "}
                                                    Delete{" "}
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
        </div>
    );
};

export default Bookings;
