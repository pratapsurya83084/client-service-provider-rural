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
    <div className="w-full">
      <AdminNavbar/>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 p-5">
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-blue-950 border border-gray-700 rounded-xl p-6 text-white flex flex-col items-center justify-center shadow-md hover:scale-105 transition"
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