import MobileFooter from "../../../components/footer/MobileFooter";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext/CreateContext";
import NavBar from "../../../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { API_KEY_RAZORPAY } from "../../../lib/ApiConnection";

// ── Pin icon ─────
const PinIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#EF4444">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </svg>
);

const CalendarEmoji = () => <span style={{ fontSize: 16 }}>📅</span>;

const Bookings = () => {
    const [activeTab, setActiveTab] = useState("userbookings");

    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [notes, setNotes] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const { fetchSinglePageBookingServices, BookingServices ,PaymentCompleteStatusUpdate} =
        useContext(UserContext);
    const [Bookings, setBookings] = useState([]);
    const { sid } = useParams();
    const navigate = useNavigate();
    const id = parseInt(sid);
    // console.log(Bookings[0]?.price);

    const token = localStorage.getItem("token");

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

  const handleConfirm = async () => {
    if (!date || !address) return;

    // console.log('bookings :',Bookings[0].price)
    try {
        const res = await BookingServices(
            token,
            Bookings[0]?.id,
            date,
            address,
            notes
        );

        if (!res.success) return;
        //    console.log("res :",res);
        const isLoaded = await loadRazorpayScript();
        if (!isLoaded) {
            alert("Razorpay SDK failed to load");
            return;
        }

        // Create order from backend
    //   console.log("res :",res.booking.id);

        const options = {
        key: API_KEY_RAZORPAY,
        amount: Bookings[0]?.price*100,
        currency: "INR",
        order_id: res?.order_id, 

         handler: async function (response) {
            // console.log("SUCCESS:", response);

            // call backend to update payment
            const paymentRes = await PaymentCompleteStatusUpdate(
                token,
                res.booking.id,
                response.razorpay_payment_id
            );

            // console.log("Payment update:", paymentRes);

            alert("Payment Successful ✅");
            navigate("/bookings");
        }
        

    };

        const rzp = new window.Razorpay(options);

        rzp.on("payment.failed", function (response) {
            console.log("FAILED:", response.error);
            alert("Payment Failed");
        });

        rzp.open();

    } catch (error) {
        console.log("error:", error);
    }
};

    const User = JSON.parse(localStorage.getItem("userAuth"));

    async function fetchSingleServices() {
        if (!token) {
            toast.error("Unauthorized User ,Please Login");
            return;
        }

        try {
            const res = await fetchSinglePageBookingServices(token, id);

            if (res.success) {
                // console.log(res.data);
                setBookings([res.data] || []);
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("error while fetching  Single Services :", error);
            return;
        }
    }

    useEffect(() => {
        fetchSingleServices();
    }, []);

    return (
        <div style={s.page}>
            <NavBar />
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
          outline: none;
        }

        .booking-input:focus {
          border-color: #3B9EE8;
        }

        textarea.booking-input {
          resize: vertical;
          min-height: 90px;
        }

        .confirm-btn {
          width: 100%;
          background: #3B9EE8;
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 15px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .confirm-btn:disabled {
          background: #93C5FD;
        }

        .layout-grid {
            display:grid;
            grid-template-columns:1fr;
            gap:20px;
        }

        @media (min-width:1024px){
            .layout-grid{
                grid-template-columns:1.6fr 1fr;
                align-items:start;
            }
        }

        .fade-up {
          animation: fadeUp .35s ease both;
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(12px); }
          to { opacity:1; transform:translateY(0); }
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
          font-weight: 600;
          z-index: 999;
        }

      `}</style>

            {submitted && (
                <div className="success-toast">✅ Booking SucessFull!</div>
            )}

            <div style={s.container}>
                <div className="layout-grid">
                    <div>
                        <div className="fade-up" style={s.card}>
                            <h1 style={s.serviceName}>
                                {Bookings[0]?.title || "NA"}
                            </h1>

                            <div style={s.badgeRow}>
                                <span style={s.badge}>
                                    {Bookings[0]?.title || "NA"}
                                </span>

                                <span style={s.codeTag}>
                                    <PinIcon /> {Bookings[0]?.district || "NA"}
                                </span>
                            </div>

                            <p style={s.price}>₹{Bookings[0]?.price || "NA"}</p>

                            <p style={s.description}>
                                {Bookings[0]?.description || "NA"}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}

                    <div style={s.formColumn}>
                        <div className="fade-up" style={s.card}>
                            <h2 style={s.formTitle}>Book this Service</h2>

                            <div style={s.fieldGroup}>
                                <label style={s.label}>PREFERRED DATE</label>
                                <input
                                    type="date"
                                    className="booking-input"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    min={new Date().toISOString().split("T")[0]}
                                />
                            </div>

                            <div style={s.fieldGroup}>
                                <label style={s.label}>YOUR ADDRESS</label>
                                <input
                                    type="text"
                                    className="booking-input"
                                    placeholder="Enter your full address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div style={s.fieldGroup}>
                                <label style={s.label}>NOTES (OPTIONAL)</label>
                                <textarea
                                    className="booking-input"
                                    placeholder="Any specific requirements..."
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>

                            <button
                                className="confirm-btn"
                                onClick={handleConfirm}
                                disabled={!date || !address}
                            >
                                <CalendarEmoji /> Confirm Booking
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{ height: 80 }} />
            </div>

            {User?.[0].role === "Farmer" && (
                <MobileFooter
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            )}
        </div>
    );
};

const s = {
    page: {
        minHeight: "100vh",
        backgroundColor: "#EEF2F7",
        fontFamily: "'DM Sans', sans-serif",
    },

    container: {
        maxWidth: 1100,
        margin: "0 auto",
        padding: "24px 16px",
    },

    cardsColumn: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
    },

    formColumn: {
        position: "sticky",
        top: 20,
        height: "fit-content",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: "20px 18px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
    },

    serviceName: {
        fontSize: 22,
        fontWeight: 800,
        color: "#111827",
        marginBottom: 10,
        textTransform: "capitalize",
    },

    badgeRow: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 14,
    },

    badge: {
        backgroundColor: "#EBF5FF",
        color: "#3B9EE8",
        fontSize: 12,
        fontWeight: 600,
        borderRadius: 20,
        padding: "4px 12px",
    },

    codeTag: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontSize: 13,
        color: "#374151",
    },

    price: {
        fontSize: 28,
        fontWeight: 800,
        color: "#3B9EE8",
        marginBottom: 6,
    },

    description: {
        fontSize: 13.5,
        color: "#6B7280",
        lineHeight: 1.6,
    },

    formTitle: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 18,
    },

    fieldGroup: {
        display: "flex",
        flexDirection: "column",
        gap: 7,
        marginBottom: 16,
    },

    label: {
        fontSize: 11,
        fontWeight: 700,
        color: "#9CA3AF",
        letterSpacing: "0.07em",
    },
};

export default Bookings;
