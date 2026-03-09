import React, { useState } from 'react'

const INITIAL_ADS = [
  {
    id: 2,
    title: 'Buy Mahindra tractor on diwali occation',
    district: 'nagar',
    start: '12/2/2026',
    end: '12/2/2026',
    status: 'ACTIVE',
  },
]

const Advertisements = () => {
  const [ads, setAds]         = useState(INITIAL_ADS)
  const [title, setTitle]     = useState('')
  const [district, setDistrict] = useState('')
  const [start, setStart]     = useState('')
  const [end, setEnd]         = useState('')
  const [nextId, setNextId]   = useState(3)

  const handleCreate = () => {
    if (!title.trim() || !start || !end) return
    const fmt = (d) => {
      const [y, m, day] = d.split('-')
      return `${parseInt(day)}/${parseInt(m)}/${y}`
    }
    setAds(prev => [
      { id: nextId, title: title.trim(), district: district.trim() || '—', start: fmt(start), end: fmt(end), status: 'ACTIVE' },
      ...prev,
    ])
    setNextId(n => n + 1)
    setTitle(''); setDistrict(''); setStart(''); setEnd('')
  }

  const handleDelete = (id) => setAds(prev => prev.filter(a => a.id !== id))

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
        .ad-row { animation: fadeUp 0.3s ease both; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.5); cursor: pointer; }
      `}</style>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[26px] font-extrabold text-[#e6edf3] tracking-tight">Manage Advertisements</h1>
        <p className="text-[13px] text-[#4ade80] mt-1 font-medium">{ads.length} advertisement{ads.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Create form card */}
      <div className="bg-[#161b22] border border-[#21262d] rounded-xl px-5 py-5 mb-5">
        <p className="text-[11px] font-bold text-[#4ade80] tracking-[0.1em] mb-4">CREATE ADVERTISEMENT</p>

        <div className="flex flex-wrap gap-3 items-end">
          {/* Title */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-[180px]">
            <label className="text-[10px] font-bold text-[#484f58] tracking-[0.08em] uppercase">Title *</label>
            <input
              type="text"
              placeholder="Ad title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] placeholder-[#484f58] rounded-md px-3 py-2.5 text-[13px] outline-none focus:border-[#4ade80] transition-colors duration-150 w-full"
            />
          </div>

          {/* District */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-[160px]">
            <label className="text-[10px] font-bold text-[#484f58] tracking-[0.08em] uppercase">District</label>
            <input
              type="text"
              placeholder="Optional"
              value={district}
              onChange={e => setDistrict(e.target.value)}
              className="bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] placeholder-[#484f58] rounded-md px-3 py-2.5 text-[13px] outline-none focus:border-[#4ade80] transition-colors duration-150 w-full"
            />
          </div>

          {/* Start */}
          <div className="flex flex-col gap-1.5 min-w-[150px]">
            <label className="text-[10px] font-bold text-[#484f58] tracking-[0.08em] uppercase">Start *</label>
            <input
              type="date"
              value={start}
              onChange={e => setStart(e.target.value)}
              className="bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] rounded-md px-3 py-2.5 text-[13px] outline-none focus:border-[#4ade80] transition-colors duration-150"
            />
          </div>

          {/* End */}
          <div className="flex flex-col gap-1.5 min-w-[150px]">
            <label className="text-[10px] font-bold text-[#484f58] tracking-[0.08em] uppercase">End *</label>
            <input
              type="date"
              value={end}
              onChange={e => setEnd(e.target.value)}
              className="bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] rounded-md px-3 py-2.5 text-[13px] outline-none focus:border-[#4ade80] transition-colors duration-150"
            />
          </div>

          {/* Create button */}
          <button
            onClick={handleCreate}
            disabled={!title.trim() || !start || !end}
            className="bg-[#4ade80] hover:bg-[#22c55e] disabled:bg-[#1a3a2a] disabled:text-[#2d6a4f] disabled:cursor-not-allowed text-[#0d1117] font-bold text-[13px] px-5 py-2.5 rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap self-end"
          >
            Create
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="border-b border-[#21262d]">
                {['ID', 'TITLE', 'DISTRICT', 'START', 'END', 'STATUS', 'ACTION'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[11px] font-bold text-[#484f58] tracking-[0.08em] whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center text-[#484f58] py-10 text-[13px]">
                    No advertisements yet.
                  </td>
                </tr>
              ) : ads.map((a, i) => (
                <tr
                  key={a.id}
                  className="ad-row border-b border-[#21262d] last:border-b-0 hover:bg-[#1c2128] transition-colors duration-150"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <td className="px-4 py-4 text-[13px] font-bold text-[#4ade80]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    #{a.id}
                  </td>
                  <td className="px-4 py-4 text-[13.5px] font-semibold text-[#e6edf3]">{a.title}</td>
                  <td className="px-4 py-4 text-[13px] text-[#8b949e]">{a.district}</td>
                  <td className="px-4 py-4 text-[12.5px] text-[#8b949e]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>{a.start}</td>
                  <td className="px-4 py-4 text-[12.5px] text-[#8b949e]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>{a.end}</td>
                  <td className="px-4 py-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded border border-[#4ade80] text-[#4ade80] tracking-[0.05em]">
                      {a.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="text-[12px] font-bold px-3 py-1.5 rounded border border-[#f85149] text-[#f85149] bg-transparent hover:bg-[#f85149] hover:text-[#0d1117] transition-all duration-150 cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Advertisements