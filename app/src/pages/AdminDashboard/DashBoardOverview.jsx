import React from "react";
import AdminNavbar from "./Navbar";

const DashBoardOverview = () => {
  const data = [
    { count: 4, label: "Total Users" },
    { count: 4, label: "Total Providers" },
    { count: 4, label: "Pending Approvals" },
    { count: 4, label: "Total Bookings" },
    { count: 4, label: "Active Bookings" },
    { count: 4, label: "Total Services" },
    { count: 4, label: "Total Categories" },
    { count: 4, label: "Advertisements" },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] text-white px-6 py-8">
      <h1 className="text-[26px] font-extrabold text-[#e6edf3] tracking-tight">Dashboard </h1>
      <p className="text-gray-500">System Overview and Statistics</p>
      {/* <AdminNavbar/> */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 ">
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white flex flex-col items-center justify-center shadow-md hover:scale-105 transition"
          >
            <h1 className="text-3xl font-bold">{item.count}</h1>
            <p className="text-sm text-gray-300 mt-2">{item.label}</p>
          </div>
        );
      })}
    </div>
    </div>
  
  );
};

export default DashBoardOverview;