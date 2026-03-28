import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "./Navbar";
import AdminContext from "../../AdminContext/CreateAdminContext";
import { toast, Toaster } from "react-hot-toast";

const Services = () => {
    const [search, setSearch] = useState("");
    const [services, setServices] = useState([]);
    const [deactivated, setDeactivated] = useState({});
    const { FetchAllServices, ServiceStatusUpdateByAdmin,DeleteServiceByAdmin } = useContext(AdminContext);

    const token = localStorage.getItem("token");

    async function fetchAllServices() {
        if (!token) {
            toast.error("Session expired ,Login please");
            return;
        }
        try {
            const res = await FetchAllServices(token);
            // console.log("services : ", res);
            if (res.success) {
                setServices(res.data);
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("error while fetching all Services :", error);
            return;
        }
    }

    useEffect(() => {
        fetchAllServices();
    }, []);

    const filtered = services.filter((s) => {
        const q = search.toLowerCase();
        return s?.title.toLowerCase().includes(q);
    });
    // console.log(filtered)

    const toggleDeactivate = async (id) => {
        //here call api for patch method to update  isActive status
        if (!token) {
            toast.error("unauthorized Access , Login Please");
            return;
        }

        try {
            const res = await ServiceStatusUpdateByAdmin(token, id);

            if (res.success) {
                toast.success(res.message);
                // console.log("status is :", res);
                fetchAllServices();
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("error while activate or deactivate  status :", error);
            return;
        }
    };

    const DeleteService = async(id) => {
        // alert(id + " delete services");
       try {
       
      const res = await DeleteServiceByAdmin(token,id);
      if (res.success) {
          toast.success(res.message);
          fetAllServices();
        //   console.log(res);
            return;

         }
         else{
            toast.error(res.message);
            return;
         }
       } catch (error) {
        console.log("error while deleting services :",error);
        return;
       }
    };

    return (
        <div>
            {/* <AdminNavbar /> */}
            <div
                className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 py-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                <Toaster position="top-center" reverseOrder={false} />
                <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');`}</style>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-[26px] font-extrabold text-[#e6edf3] tracking-tight">
                        All Services
                    </h1>
                    <p className="text-[13px] text-[#4ade80] mt-1 font-medium">
                        {filtered?.length} services in database
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
                                        "PRICE",
                                        "DISTRICT",
                                        "STATUS",
                                        "DATE",
                                        "ACTION",
                                        "DELETE",
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
                                            colSpan={10}
                                            className="text-center text-[#484f58] py-10 text-[13px]"
                                        >
                                            No services found.
                                        </td>
                                    </tr>
                                ) : (
                                    filtered
                                        ?.sort((a, b) => a.id - b.id)
                                        ?.map((s, i) => {
                                            // const catColor = CATEGORY_COLORS[
                                            //     s.category
                                            // ] || {
                                            //     text: "#8b949e",
                                            //     border: "#8b949e",
                                            // };
                                            // const isDeactivated = deactivated[s.id];

                                            return (
                                                <tr
                                                    key={s?.id}
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
                                                        #{s?.id}
                                                    </td>

                                                    {/* Title */}
                                                    <td className="px-4 py-4 text-[13.5px] font-semibold text-[#e6edf3] capitalize">
                                                        {s?.title}
                                                    </td>

                                                    {/* <td className="px-4 py-4 text-[13.5px] font-semibold text-[#e6edf3] capitalize">
                                                    {s?.description}
                                                </td> */}
                                                    {/* Category badge */}
                                                    {/* <td className="px-4 py-4">
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
                                                </td> */}

                                                    {/* Provider */}
                                                    {/* <td className="px-4 py-4 text-[13px] text-[#c9d1d9]">
                                                    {s.provider}
                                                </td> */}

                                                    {/* Mobile */}
                                                    {/* <td
                                                    className="px-4 py-4 text-[12.5px] text-[#8b949e]"
                                                    style={{
                                                        fontFamily:
                                                            "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {s.mobile}
                                                </td> */}

                                                    {/* Price */}
                                                    <td
                                                        className="px-4 py-4 text-[13px] font-bold text-[#4ade80]"
                                                        style={{
                                                            fontFamily:
                                                                "'JetBrains Mono', monospace",
                                                        }}
                                                    >
                                                        {s?.price}
                                                    </td>

                                                    {/* District */}
                                                    <td
                                                        className="px-4 py-4 text-[13px] text-[#8b949e]"
                                                        style={{
                                                            fontFamily:
                                                                "'JetBrains Mono', monospace",
                                                        }}
                                                    >
                                                        {s?.district}
                                                    </td>

                                                    {/* Status */}
                                                    <td className="px-4 py-4">
                                                        <span
                                                            className="text-[11px] font-bold px-2.5 py-1 rounded border tracking-[0.05em]"
                                                            style={{
                                                                color: !s?.isActive
                                                                    ? "#f85149"
                                                                    : "#4ade80",
                                                                borderColor:
                                                                    !s?.isActive
                                                                        ? "#f85149"
                                                                        : "#4ade80",
                                                                background:
                                                                    "transparent",
                                                            }}
                                                        >
                                                            {!s?.isActive
                                                                ? "Reject"
                                                                : "Approved"}
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
                                                        {new Date(
                                                            s.createdAt,
                                                        ).toDateString()}
                                                    </td>

                                                    {/* Action */}
                                                    <td className="px-4 py-4">
                                                        <button
                                                            onClick={() =>
                                                                toggleDeactivate(
                                                                    s?.id,
                                                                    s?.isActive,
                                                                )
                                                            }
                                                            className="text-[12px] font-bold px-3 py-1.5 rounded border transition-all duration-150 cursor-pointer"
                                                            style={
                                                                !s.isActive
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
                                                            onMouseEnter={(
                                                                e,
                                                            ) => {
                                                                e.currentTarget.style.background =
                                                                    !s.isActive
                                                                        ? "#4ade80"
                                                                        : "#f85149";
                                                                e.currentTarget.style.color =
                                                                    "#0d1117";
                                                            }}
                                                            onMouseLeave={(
                                                                e,
                                                            ) => {
                                                                e.currentTarget.style.background =
                                                                    "transparent";
                                                                e.currentTarget.style.color =
                                                                    !s.isActive
                                                                        ? "#4ade80"
                                                                        : "#f85149";
                                                            }}
                                                        >
                                                            {s.isActive
                                                                ? "Reject"
                                                                : "Approved"}
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={(e) =>
                                                                DeleteService(
                                                                    s.id,
                                                                )
                                                            }
                                                            className="bg-red-500 text-black px-3 py-1 rounded-lg cursor-pointer"
                                                        >
                                                            delete
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
