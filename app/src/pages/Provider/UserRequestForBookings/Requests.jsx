import React, { useContext, useEffect, useState } from "react";
import MobileProviderFooter from "../../../components/footer/MobileProviderFooter";
import { UserContext } from "../../../UserContext/CreateContext";
import NavBar from "../../../components/NavBar";
import { toast, Toaster } from "react-hot-toast";

const Requests = () => {
    const [loading, setLoading] = useState(true);
    const [bookingsRequest, setBookingsRequest] = useState([]);
    const {
        GetProfile,
        getProviderRequestSendedByCustomerforBooking,
        updateBookingStatus,
    } = useContext(UserContext);

    const [tabname, settabname] = useState("userrequestoproviderforbooking");

    const token = localStorage.getItem("token");

    async function getUserProfile() {
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

    const fetchRequestedBookings = async () => {
        if (!token) {
            toast.error("Unauthorized access. Please login.");
            return;
        }
        try {
            const res =
                await getProviderRequestSendedByCustomerforBooking(token);
            if (res.success) {
                setBookingsRequest(res.data || []);
                // console.log(res.data);
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log("error while fetching requested bookings:", error);
        }
    };

    useEffect(() => {
        fetchRequestedBookings();
    }, []);

    // Update a single booking's status locally after API call
    const handleStatusUpdate = async (newStatus,bookingId) => {
        if (!token) {
            toast.error("unauthorized User ,Please Login as Provider");
            return;
        }
        try {
            // here call api for status change
             const res =  await updateBookingStatus(token,newStatus,bookingId);
            //    alert(bookingId +" "+ newStatus);
            if (res.success) {
                fetchRequestedBookings();
                toast.success(`Booking ${newStatus} + ${bookingId} successfully!`);
                return;
            }else{
                  toast.error(res.message);
                  return;
            }

        } catch (error) {
            console.log("error while updating status :", error);
            return;
        }
    };

    return (
        <div style={styles.page}>
            <NavBar />
            <Toaster position="top-center" reverseOrder={false} />
            <div style={styles.container}>
                <h1 style={styles.heading}>Booking Requests</h1>
                <p style={styles.subheading}>{bookingsRequest.length} total</p>

                <div style={styles.list}>
                    {bookingsRequest.length === 0 && !loading ? (
                        <p style={styles.empty}>No booking requests yet.</p>
                    ) : (
                        bookingsRequest.map((booking) => (
                            <BookingCard
                                key={booking.bookingId}
                                booking={booking}
                                // token={token}
                                // updateBookingStatus={updateBookingStatus}
                                onStatusUpdate={handleStatusUpdate}
                            />
                        ))
                    )}
                </div>
            </div>

            {!loading && User?.[0]?.role === "Provider" && (
                <MobileProviderFooter
                    tabname={tabname}
                    settabname={settabname}
                />
            )}
        </div>
    );
};

const BookingCard = ({ booking, onStatusUpdate }) => {
    const [actionLoading, setActionLoading] = useState(false);

    const status = (booking.bookingStatus || "").toLowerCase();

    const getBadgeStyle = (s) => {
        switch (s) {
            case "confirmed":
                return { backgroundColor: "#e6f4ea", color: "#2e7d32" };
            case "inprogress":
                return { backgroundColor: "#e3f2fd", color: "#1565c0" };
            case "completed":
                return { backgroundColor: "#e8f5e9", color: "#1b5e20" };
            case "pending":
                return { backgroundColor: "#fff8e1", color: "#f57f17" };
            case "cancelled":
                return { backgroundColor: "#fdecea", color: "#c62828" };
            default:
                return { backgroundColor: "#f3f3f3", color: "#757575" };
        }
    };

    const getBadgeLabel = (s) => {
        if (s === "inprogress") return "In Progress";
        return booking.bookingStatus || "Unknown";
    };

    const formatDate = (dateStr) => {
        try {
            const d = new Date(dateStr);
            if (d.getFullYear() <= 1) return "Date not set";
            return d.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            });
        } catch {
            return "Invalid date";
        }
    };

    const handleAction = async (newStatus,bookingid) => {
        setActionLoading(true);
        // try {
        // Replace this with your actual API call, e.g.:
        // await updateBookingStatus(token, booking.bookingId, newStatus);
        // const res = await updateBookingStatus(token, bookingid, newStatus);
        // if (res?.success) {
        onStatusUpdate(newStatus,bookingid);

        // } else {
        //     toast.error("Failed to update status.");
        // }
        // } catch (error) {
        //     console.log("Error updating status:", error);
        //     toast.error("Something went wrong.");
        // } finally {
        //     setActionLoading(false);
        // }
    };

    return (
        <div style={styles.card}>
            {/* Header: service name + status badge */}
            <div style={styles.cardHeader}>
                <span style={styles.serviceName}>{booking.serviceTitle}</span>
                <span style={{ ...styles.badge, ...getBadgeStyle(status) }}>
                    {getBadgeLabel(status)}
                </span>
            </div>

            {/* Info rows */}
            <div style={styles.infoRow}>
                <span style={styles.icon}>👤</span>
                <span style={styles.infoLabel}>Customer:</span>
                <span style={styles.infoText}>{booking.farmerName}</span>
            </div>
            <div style={styles.infoRow}>
                <span style={styles.icon}>📞</span>
                <span style={styles.infoText}>{booking.farmerMobile}</span>
            </div>
            <div style={styles.infoRow}>
                <span style={styles.icon}>📅</span>
                <span style={styles.infoText}>
                    {formatDate(booking.bookingDate)}
                </span>
            </div>
            <div style={styles.infoRow}>
                <span style={styles.icon}>📍</span>
                <span style={styles.infoText}>{booking.customerAddress}</span>
            </div>
            <div style={styles.infoRow}>
                <span style={styles.icon}>💰</span>
                <span style={styles.infoText}>
                    ₹{booking.price?.toLocaleString("en-IN")}
                </span>
            </div>

            {/* Action Buttons */}
            {status === "pending" && (
                <div style={styles.btnRow}>
                    <button
                        style={{ ...styles.btn, ...styles.btnConfirm }}
                        disabled={actionLoading}
                        onClick={() =>
                            handleAction("Confirmed", booking?.bookingId)
                        }
                    >
                        ✅ Confirm
                    </button>
                    <button
                        style={{ ...styles.btn, ...styles.btnReject }}
                        disabled={actionLoading}
                        onClick={() =>
                            handleAction("Cancelled", booking?.bookingId)
                        }
                    >
                        ✖ Reject
                    </button>
                </div>
            )}

            {status === "confirmed" && (
                <button
                    style={{ ...styles.btn, ...styles.btnStart }}
                    disabled={actionLoading}
                    onClick={() =>
                        handleAction("InProgress", booking?.bookingId)
                    }
                >
                    🚀 Start Work
                </button>
            )}

            {status === "inprogress" && (
                <button
                    style={{ ...styles.btn, ...styles.btnComplete }}
                    disabled={actionLoading}
                    onClick={() =>
                        handleAction("Completed", booking?.bookingId)
                    }
                >
                    ✅ Mark Complete
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
        maxWidth: 900,
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
        alignItems: "center",
        gap: 8,
    },
    icon: {
        fontSize: 14,
        lineHeight: "20px",
        flexShrink: 0,
    },
    infoLabel: {
        fontSize: 13,
        color: "#888",
        lineHeight: "20px",
    },
    infoText: {
        fontSize: 13,
        color: "#555",
        lineHeight: "20px",
    },
    btnRow: {
        display: "flex",
        gap: 10,
        marginTop: 10,
    },
    btn: {
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
        transition: "opacity 0.15s",
    },
    btnConfirm: {
        backgroundColor: "#2979ff",
        color: "#fff",
        flex: 1,
    },
    btnReject: {
        backgroundColor: "#e53935",
        color: "#fff",
        flex: 1,
    },
    btnStart: {
        backgroundColor: "#2979ff",
        color: "#fff",
        marginTop: 10,
    },
    btnComplete: {
        backgroundColor: "#2e7d32",
        color: "#fff",
        marginTop: 10,
    },
};

export default Requests;
