import React, { useContext, useEffect, useState } from "react";
import MobileProviderFooter from "../../../components/footer/MobileProviderFooter";
import { UserContext } from "../../../UserContext/CreateContext";
import { useNavigate} from 'react-router-dom'
import {toast,Toaster} from 'react-hot-toast';



const ProviderProfile = () => {
  const [loading, setLoading] = useState(true);
  const { GetProfile } = useContext(UserContext);
 
  const navigate = useNavigate();

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
  const user = User?.[0];

  const handleUpdateProfile = () => {
    console.log("Navigate to update profile");
    
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userAuth");
    toast.success("Lougout Successfully");
    setTimeout(()=>{
    navigate("/login");
    },1000);
    // console.log("Logged out");
   
  };

  // Get initials/first letter for avatar
  const avatarLetter = user?.username?.charAt(0)?.toUpperCase() || "P";

  return (
    <div style={styles.page}>
        <Toaster position="top-center" reverseOrder={false} />
      <div style={styles.container}>
        <h1 style={styles.heading}>Profile</h1>

        {/* Profile Card */}
        <div style={styles.card}>
          {/* Avatar */}
          <div style={styles.avatar}>
            <span style={styles.avatarLetter}>{avatarLetter}</span>
          </div>

          {/* Name */}
          <p style={styles.name}>{user?.username || "Username"}</p>

          {/* Business name / email */}
          <p style={styles.business}>{user?.businessName || user?.email || "Business Name"}</p>

          {/* Available badge */}
          <div style={styles.availableBadge}>
            <span style={styles.availableDot} />
            <span style={styles.availableText}>Available</span>
          </div>

          {/* ID badge */}
          <div style={styles.idBadge}>
            <span style={styles.idText}>ID: {user?.id || "—"}</span>
          </div>
        </div>

        {/* Update Profile Button */}
        <button style={styles.updateBtn} onClick={handleUpdateProfile}>
          Update Profile
        </button>

        {/* Logout Button */}
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Provider Footer */}
      {!loading && user?.role === "Provider" && <MobileProviderFooter />}
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
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  heading: {
    fontSize: 24,
    fontWeight: 700,
    color: "#1a1a2e",
    margin: "0 0 4px",
  },

  // Profile card
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: "32px 20px 28px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    backgroundColor: "#7c6fd4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  avatarLetter: {
    fontSize: 26,
    fontWeight: 700,
    color: "#ffffff",
  },
  name: {
    fontSize: 17,
    fontWeight: 700,
    color: "#1a1a2e",
    margin: 0,
  },
  business: {
    fontSize: 13,
    color: "#888",
    margin: 0,
  },
  availableBadge: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#e6f4ea",
    borderRadius: 20,
    padding: "4px 12px",
    marginTop: 4,
  },
  availableDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#2e7d32",
    flexShrink: 0,
  },
  availableText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#2e7d32",
  },
  idBadge: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: "4px 14px",
    marginTop: 2,
  },
  idText: {
    fontSize: 12,
    color: "#555",
    fontWeight: 500,
  },

  // Buttons
  updateBtn: {
    backgroundColor: "#2979ff",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "16px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
  },
  logoutBtn: {
    backgroundColor: "#e53935",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "16px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
  },
};

export default ProviderProfile;