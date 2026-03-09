import React from 'react'

const AdminNavbar = () => {
  return (
    <nav style={s.nav}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .logout-btn {
          background: transparent;
          border: 1.5px solid #30363d;
          color: #c9d1d9;
          border-radius: 6px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
          letter-spacing: 0.02em;
        }
        .logout-btn:hover {
          border-color: #f85149;
          color: #f85149;
        }
      `}</style>

      {/* Left — Brand */}
      <span className='hidden md:flex' style={s.brand}>Admin Panel</span>

      {/* Right — User info + logout */}
      <div style={s.right}>
        <span style={s.username}>System Admin</span>
        <span style={s.adminBadge}>ADMIN</span>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  )
}

const s = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161b22',
    borderBottom: '1px solid #21262d',
    padding: '0 24px',
    height: 52,
    fontFamily: "'DM Sans', sans-serif",
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  brand: {
    fontSize: 15,
    fontWeight: 700,
    color: '#e6edf3',
    letterSpacing: '-0.2px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  username: {
    fontSize: 13,
    color: '#8b949e',
    fontWeight: 500,
  },
  adminBadge: {
    fontSize: 11,
    fontWeight: 700,
    color: '#4ade80',
    border: '1.5px solid #4ade80',
    borderRadius: 5,
    padding: '3px 9px',
    letterSpacing: '0.06em',
    fontFamily: "'DM Sans', sans-serif",
  },
}

export default AdminNavbar