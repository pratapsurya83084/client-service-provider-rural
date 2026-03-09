
import MobileFooter from '../../../components/footer/MobileFooter'

import React, { useState } from 'react'

// ── Inline MobileFooter (so file is self-contained) ──────────────────────────
const HomeIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z"
      fill={active ? '#3B9EE8' : 'none'} stroke={active ? '#3B9EE8' : '#9CA3AF'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ServicesIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7.5" stroke={active ? '#3B9EE8' : '#9CA3AF'} strokeWidth="1.8" />
    <path d="M17 17L21 21" stroke={active ? '#3B9EE8' : '#9CA3AF'} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const BookingsIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="17" rx="2" stroke={active ? '#3B9EE8' : '#9CA3AF'} strokeWidth="1.8" />
    <path d="M3 9H21" stroke={active ? '#3B9EE8' : '#9CA3AF'} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 2V6M16 2V6" stroke={active ? '#3B9EE8' : '#9CA3AF'} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const ProfileIcon = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.5" stroke={active ? '#3B9EE8' : '#9CA3AF'} strokeWidth="1.8" />
    <path d="M4 20C4 16.69 7.58 14 12 14C16.42 14 20 16.69 20 20" stroke={active ? '#3B9EE8' : '#9CA3AF'} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)





// ── Pin icon ─────
const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#EF4444">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
)

// ── Calendar icon ──
const CalendarEmoji = () => (
  <span style={{ fontSize: 16 }}>📅</span>
)

// ── Main Page ─────────────────────────────────────────────────────────────────
const Bookings = () => {
  const [activeTab, setActiveTab] = useState('bookings')
  const [date, setDate] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const service = {
    name: 'drone sprayer',
    category: 'Agriculture Equipment',
    code: '12233',
    price: '₹2000',
    provider: 'dronwala',
    description: 'Professional drone spraying service for agricultural fields. Covers up to 10 acres per session with precision nozzle technology.',
  }

  const handleConfirm = () => {
    if (!date || !address) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div style={s.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .booking-input {
          width: 100%;
          border: 1.5px solid #E5E7EB;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          color: #111827;
          background: #fff;
          outline: none;
          transition: border-color 0.18s;
          -webkit-appearance: none;
        }
        .booking-input:focus { border-color: #3B9EE8; }
        .booking-input::placeholder { color: #9CA3AF; }

        textarea.booking-input { resize: vertical; min-height: 90px; }

        .confirm-btn {
          width: 100%;
          background: #3B9EE8;
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 15px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.18s, transform 0.12s;
          letter-spacing: 0.01em;
        }
        .confirm-btn:hover { background: #2d8fd4; }
        .confirm-btn:active { transform: scale(0.98); }
        .confirm-btn:disabled { background: #93C5FD; cursor: not-allowed; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.4s ease both; }
        .fade-up-2 { animation: fadeUp 0.4s 0.08s ease both; }

        @keyframes pop {
          0%   { transform: scale(0.85); opacity: 0; }
          60%  { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .success-toast {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: #10B981;
          color: #fff;
          padding: 12px 22px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          z-index: 999;
          box-shadow: 0 4px 20px rgba(16,185,129,0.3);
          animation: pop 0.35s ease both;
          white-space: nowrap;
        }
      `}</style>

      {submitted && (
        <div className="success-toast">✅ Booking confirmed!</div>
      )}

      <div style={s.container}>
        {/* ── Service Info Card ── */}
        <div className="fade-up" style={s.card}>
          <h1 style={s.serviceName}>{service.name}</h1>

          <div style={s.badgeRow}>
            <span style={s.badge}>{service.category}</span>
            <span style={s.codeTag}>
              <PinIcon /> {service.code}
            </span>
          </div>

          <p style={s.price}>{service.price}</p>
          <p style={s.provider}>by <strong>{service.provider}</strong></p>
          <p style={s.description}>{service.description}</p>
        </div>

        {/* ── Booking Form Card ── */}
        <div className="fade-up-2" style={s.card}>
          <h2 style={s.formTitle}>Book this Service</h2>

          {/* Date */}
          <div style={s.fieldGroup}>
            <label style={s.label}>PREFERRED DATE</label>
            <input
              type="date"
              className="booking-input"
              value={date}
              onChange={e => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Address */}
          <div style={s.fieldGroup}>
            <label style={s.label}>YOUR ADDRESS</label>
            <input
              type="text"
              className="booking-input"
              placeholder="Enter your full address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          {/* Notes */}
          <div style={s.fieldGroup}>
            <label style={s.label}>NOTES (OPTIONAL)</label>
            <textarea
              className="booking-input"
              placeholder="Any specific requirements..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>

          {/* CTA */}
          <button
            className="confirm-btn"
            onClick={handleConfirm}
            disabled={!date || !address}
          >
            <CalendarEmoji /> Confirm Booking
          </button>
        </div>

        {/* bottom spacer for fixed footer */}
        <div style={{ height: 80 }} />
      </div>

      <MobileFooter activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

const s = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#EEF2F7',
    fontFamily: "'DM Sans', sans-serif",
  },
  container: {
    maxWidth: 560,
    margin: '0 auto',
    padding: '24px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: '20px 18px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
  },
  serviceName: {
    fontSize: 22,
    fontWeight: 800,
    color: '#111827',
    textTransform: 'capitalize',
    letterSpacing: '-0.3px',
    marginBottom: 10,
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 14,
  },
  badge: {
    backgroundColor: '#EBF5FF',
    color: '#3B9EE8',
    fontSize: 12,
    fontWeight: 600,
    borderRadius: 20,
    padding: '4px 12px',
  },
  codeTag: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 13,
    color: '#374151',
    fontWeight: 500,
  },
  price: {
    fontSize: 28,
    fontWeight: 800,
    color: '#3B9EE8',
    marginBottom: 6,
    letterSpacing: '-0.5px',
  },
  provider: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
  },
  description: {
    fontSize: 13.5,
    color: '#6B7280',
    lineHeight: 1.6,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 18,
    letterSpacing: '-0.2px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    marginBottom: 16,
  },
  label: {
    fontSize: 11,
    fontWeight: 700,
    color: '#9CA3AF',
    letterSpacing: '0.07em',
  },
}

export default Bookings;