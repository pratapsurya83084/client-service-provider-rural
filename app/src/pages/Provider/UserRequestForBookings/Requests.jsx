


import React, { useContext, useEffect, useState } from 'react';
import MobileProviderFooter from '../../../components/footer/MobileProviderFooter';
import { UserContext } from '../../../UserContext/CreateContext';

const bookings = [
  {
    id: 1,
    serviceName: "Tractor Repair",
    userName: "Rahul Patil",
    date: "2026-03-15",
    location: "Pune",
    status: "Confirmed"
  },
  {
    id: 2,
    serviceName: "Soil Testing",
    userName: "Amit Sharma",
    date: "2026-03-16",
    location: "Nashik",
    status: "Pending"
  },
  {
    id: 3,
    serviceName: "Irrigation Setup",
    userName: "Sanjay Jadhav",
    date: "2026-03-17",
    location: "Satara",
    status: "Completed"
  },
  {
    id: 4,
    serviceName: "Harvest Machine Rental",
    userName: "Vikas Deshmukh",
    date: "2026-03-18",
    location: "Kolhapur",
    status: "Confirmed"
  }
];


const Requests = () => {
  const [loading, setLoading] = useState(true);
  // const [bookings, setBookings] = useState([]);
  const { GetProfile } = useContext(UserContext);

  async function getUserProfile() {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await GetProfile(token);
      localStorage.setItem("userAuth", JSON.stringify(res));
      setLoading(false);
    } catch (error) {
      console.log("error while fetching profile :", error);
    }
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  const User = JSON.parse(localStorage.getItem("userAuth"));

  const handleStartWork = (id) => {
    console.log("Start work for booking:", id);
    // TODO: call your API to update booking status
  };

  const getBadgeStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return { backgroundColor: "#e6f4ea", color: "#2e7d32" };
      case "completed":
        return { backgroundColor: "#e6f4ea", color: "#2e7d32" };
      case "pending":
        return { backgroundColor: "#fff8e1", color: "#f57f17" };
      case "cancelled":
        return { backgroundColor: "#fdecea", color: "#c62828" };
      default:
        return { backgroundColor: "#f3f3f3", color: "#757575" };
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Booking Requests</h1>
        <p style={styles.subheading}>{bookings.length} total</p>

        <div style={styles.list}>
          {bookings.length === 0 && !loading ? (
            <p style={styles.empty}>No booking requests yet.</p>
          ) : (
            bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                badgeStyle={getBadgeStyle(booking.status)}
                onStartWork={handleStartWork}
              />
            ))
          )}
        </div>
      </div>

      {!loading && User?.[0]?.role === "Provider" && <MobileProviderFooter />}
    </div>
  );
};

const BookingCard = ({ booking, badgeStyle, onStartWork }) => {
  return (
    <div style={styles.card}>
      {/* Top row: service name + status badge */}
      <div style={styles.cardHeader}>
        <span style={styles.serviceName}>{booking.serviceName}</span>
        <span style={{ ...styles.badge, ...badgeStyle }}>{booking.status}</span>
      </div>

      {/* Info rows */}
      <div style={styles.infoRow}>
        <span style={styles.icon}>👤</span>
        <span style={styles.infoText}>{booking.userName}</span>
      </div>
      <div style={styles.infoRow}>
        <span style={styles.icon}>📅</span>
        <span style={styles.infoText}>{booking.date}</span>
      </div>
      <div style={styles.infoRow}>
        <span style={styles.icon}>📍</span>
        <span style={styles.infoText}>{booking.location}</span>
      </div>

      {/* Start Work button — only show for confirmed */}
      {booking.status?.toLowerCase() === "confirmed" && (
        <button
          style={styles.startBtn}
          onClick={() => onStartWork(booking.id)}
        >
          🚀 Start Work
        </button>
      )}
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#eef0f7",
    fontFamily: "'Segoe UI', sans-serif",
    paddingBottom: 80,
  },
  container: {
    maxWidth: 600,
    margin: "0 auto",
    padding: "32px 16px 16px",
  },
  heading: {
    fontSize: 24,
    fontWeight: 700,
    color: "#1a1a2e",
    margin: 0,
  },
  subheading: {
    fontSize: 13,
    color: "#888",
    margin: "4px 0 20px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  empty: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginTop: 40,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: "16px 20px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  serviceName: {
    fontSize: 15,
    fontWeight: 600,
    color: "#1a1a2e",
  },
  badge: {
    fontSize: 12,
    fontWeight: 500,
    padding: "3px 10px",
    borderRadius: 20,
  },
  infoRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
  },
  icon: {
    fontSize: 14,
    lineHeight: "20px",
    flexShrink: 0,
  },
  infoText: {
    fontSize: 13,
    color: "#555",
    lineHeight: "20px",
  },
  startBtn: {
    marginTop: 10,
    backgroundColor: "#2979ff",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "13px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
};

export default Requests;