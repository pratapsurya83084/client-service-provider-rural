import React, { useState } from "react";

const logs = [
  { id: 10, mobile: "9309872426", otp: "923724", attempts: 1, used: true,  expires: "23/2/2026, 4:39:38 pm", sent: "23/2/2026, 4:34:38 pm" },
  { id: 9,  mobile: "7788334455", otp: "237578", attempts: 1, used: true,  expires: "12/2/2026, 2:29:35 pm", sent: "12/2/2026, 2:24:35 pm" },
  { id: 8,  mobile: "2134567890", otp: "853083", attempts: 1, used: true,  expires: "12/2/2026, 2:22:05 pm", sent: "12/2/2026, 2:17:05 pm" },
  { id: 7,  mobile: "9876543210", otp: "839414", attempts: 0, used: false, expires: "12/2/2026, 2:21:01 pm", sent: "12/2/2026, 2:16:01 pm" },
  { id: 6,  mobile: "9876543210", otp: "927880", attempts: 1, used: true,  expires: "12/2/2026, 1:56:48 pm", sent: "12/2/2026, 1:51:48 pm" },
  { id: 5,  mobile: "8894449993", otp: "362880", attempts: 1, used: true,  expires: "11/2/2026, 5:15:17 pm", sent: "11/2/2026, 5:10:17 pm" },
  { id: 4,  mobile: "7788334455", otp: "319559", attempts: 1, used: true,  expires: "11/2/2026, 5:10:22 pm", sent: "11/2/2026, 5:05:22 pm" },
  { id: 3,  mobile: "8894449993", otp: "379304", attempts: 1, used: true,  expires: "11/2/2026, 3:57:47 pm", sent: "11/2/2026, 3:52:47 pm" },
  { id: 2,  mobile: "1133224455", otp: "560325", attempts: 1, used: true,  expires: "11/2/2026, 3:50:31 pm", sent: "11/2/2026, 3:45:31 pm" },
  { id: 1,  mobile: "9876543210", otp: "901310", attempts: 1, used: true,  expires: "11/2/2026, 3:46:10 pm", sent: "11/2/2026, 3:41:10 pm" },
];

const SystemLogs = () => {
  const [search, setSearch] = useState("");

  const filtered = logs.filter((log) => log.mobile.includes(search));

  return (
    <div
      className="min-h-screen bg-[#0d1117] text-[#c9d1d9] px-6 py-8  "
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .log-row { animation: fadeUp 0.3s ease both; }
      `}</style>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[26px] font-extrabold text-[#e6edf3] tracking-tight">System Logs</h1>
        <p className="text-[13px] text-[#4ade80] mt-1 font-medium">
          OTP request logs • {filtered.length} records
        </p>
      </div>

      {/* Search */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search by mobile number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] placeholder-[#484f58] rounded-md px-4 py-2 text-[13px] outline-none focus:border-[#4ade80] transition-colors duration-150 w-full max-w-[280px]"
        />
      </div>

      {/* Table */}
      <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] border-collapse">
            <thead>
              <tr className="border-b border-[#21262d]">
                {["ID", "MOBILE", "OTP CODE", "ATTEMPTS", "USED", "EXPIRES", "LAST SENT"].map((h) => (
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
                  <td colSpan={7} className="text-center text-[#484f58] py-10 text-[13px]">
                    No logs found.
                  </td>
                </tr>
              ) : (
                filtered.map((log, i) => (
                  <tr
                    key={log.id}
                    className="log-row border-b border-[#21262d] last:border-b-0 hover:bg-[#1c2128] transition-colors duration-150"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    {/* ID */}
                    <td
                      className="px-4 py-4 text-[13px] font-bold text-[#4ade80]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      #{log.id}
                    </td>

                    {/* Mobile */}
                    <td
                      className="px-4 py-4 text-[12.5px] text-[#c9d1d9]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {log.mobile}
                    </td>

                    {/* OTP */}
                    <td
                      className="px-4 py-4 text-[13px] font-bold text-[#4ade80]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {log.otp}
                    </td>

                    {/* Attempts */}
                    <td
                      className="px-4 py-4 text-[13px] text-[#8b949e]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {log.attempts}
                    </td>

                    {/* Used badge */}
                    <td className="px-4 py-4">
                      {log.used ? (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded border border-[#4ade80] text-[#4ade80] tracking-[0.05em]">
                          YES
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded border border-[#30363d] text-[#484f58] tracking-[0.05em]">
                          NO
                        </span>
                      )}
                    </td>

                    {/* Expires */}
                    <td
                      className="px-4 py-4 text-[12px] text-[#8b949e] whitespace-nowrap"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {log.expires}
                    </td>

                    {/* Last Sent */}
                    <td
                      className="px-4 py-4 text-[12px] text-[#8b949e] whitespace-nowrap"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {log.sent}
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

export default SystemLogs;