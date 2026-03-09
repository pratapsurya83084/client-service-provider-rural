import React, { useState } from "react";
import AdminNavbar from "../Navbar";

const logs = [
  {
    id: 10,
    mobile: "9309872426",
    otp: "923724",
    attempts: 1,
    used: true,
    expires: "23/2/2026, 4:39:38 pm",
    sent: "23/2/2026, 4:34:38 pm",
  },
  {
    id: 9,
    mobile: "7788334455",
    otp: "237578",
    attempts: 1,
    used: true,
    expires: "12/2/2026, 2:29:35 pm",
    sent: "12/2/2026, 2:24:35 pm",
  },
  {
    id: 8,
    mobile: "2134567890",
    otp: "853083",
    attempts: 1,
    used: true,
    expires: "12/2/2026, 2:22:05 pm",
    sent: "12/2/2026, 2:17:05 pm",
  },
  {
    id: 7,
    mobile: "9876543210",
    otp: "839414",
    attempts: 0,
    used: false,
    expires: "12/2/2026, 2:21:01 pm",
    sent: "12/2/2026, 2:16:01 pm",
  },
  {
    id: 6,
    mobile: "9876543210",
    otp: "927880",
    attempts: 1,
    used: true,
    expires: "12/2/2026, 1:56:48 pm",
    sent: "12/2/2026, 1:51:48 pm",
  },
  {
    id: 5,
    mobile: "8894449993",
    otp: "362880",
    attempts: 1,
    used: true,
    expires: "11/2/2026, 5:15:17 pm",
    sent: "11/2/2026, 5:10:17 pm",
  },
  {
    id: 4,
    mobile: "7788334455",
    otp: "319559",
    attempts: 1,
    used: true,
    expires: "11/2/2026, 5:10:22 pm",
    sent: "11/2/2026, 5:05:22 pm",
  },
  {
    id: 3,
    mobile: "8894449993",
    otp: "379304",
    attempts: 1,
    used: true,
    expires: "11/2/2026, 3:57:47 pm",
    sent: "11/2/2026, 3:52:47 pm",
  },
  {
    id: 2,
    mobile: "1133224455",
    otp: "560325",
    attempts: 1,
    used: true,
    expires: "11/2/2026, 3:50:31 pm",
    sent: "11/2/2026, 3:45:31 pm",
  },
  {
    id: 1,
    mobile: "9876543210",
    otp: "901310",
    attempts: 1,
    used: true,
    expires: "11/2/2026, 3:46:10 pm",
    sent: "11/2/2026, 3:41:10 pm",
  },
];

const SystemLogs = () => {
  const [search, setSearch] = useState("");

  const filtered = logs.filter((log) =>
    log.mobile.includes(search)
  );

  return (

<div>
  <AdminNavbar/>
  <div className="p-6 text-gray-200">
      {/* Header */}
      <h1 className="text-xl font-semibold mb-1">System Logs</h1>
      <p className="text-sm text-gray-400 mb-6">
        OTP request logs • {filtered.length} records
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by mobile number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-5 w- bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      {/* Table */}
      <div className="overflow-x-auto border border-gray-800 rounded-lg">
        <table className="w-full text-sm">
          
          {/* Table Head */}
          <thead className="bg-[#020617] text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Mobile</th>
              <th className="px-4 py-3 text-left">OTP Code</th>
              <th className="px-4 py-3 text-left">Attempts</th>
              <th className="px-4 py-3 text-left">Used</th>
              <th className="px-4 py-3 text-left">Expires</th>
              <th className="px-4 py-3 text-left">Last Sent</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-800">
            {filtered.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-[#111827] transition"
              >
                <td className="px-4 py-3">#{log.id}</td>

                <td className="px-4 py-3">{log.mobile}</td>

                <td className="px-4 py-3 text-emerald-400 font-medium">
                  {log.otp}
                </td>

                <td className="px-4 py-3">{log.attempts}</td>

                <td className="px-4 py-3">
                  {log.used ? (
                    <span className="px-2 py-1 text-xs font-semibold bg-green-900 text-green-400 rounded">
                      YES
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-semibold bg-gray-800 text-gray-400 rounded">
                      NO
                    </span>
                  )}
                </td>

                <td className="px-4 py-3 text-gray-400">
                  {log.expires}
                </td>

                <td className="px-4 py-3 text-gray-400">
                  {log.sent}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>

</div>

  
  );
};

export default SystemLogs;