import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../../components/NavBar";
import MobileFooter from "../../../components/footer/MobileFooter";
import { UserContext } from "../../../UserContext/CreateContext";

const UserBookings = () => {
    const [activeTab, setActiveTab] = useState("bookings");
    const [Bookings, setBookings] = useState([]);
    const { getFarmerSpecificBookingServices } = useContext(UserContext);

    const User = JSON.parse(localStorage.getItem("userAuth"));
    const token = localStorage.getItem("token");

    async function fetchFarmerSpecifc() {
        if (!token) return;

        try {
            const res = await getFarmerSpecificBookingServices(token);

            if (res.success) {
                console.log("user bookings :", res.data);
                setBookings(res.data || []);
            }
        } catch (error) {
            console.log("error while fetching bookings :", error);
        }
    }

    useEffect(() => {
        fetchFarmerSpecifc();
    }, []);

    return (
        <div style={s.page}>
            <NavBar />

            <div style={s.container} className="">
                <h2 style={s.heading}>My Bookings</h2>

                <div style={s.cardsColumn}>
                    {Bookings?.length > 0 ? (
                        Bookings.map((b, i) => (
                            <div key={i} style={s.card}>
                                <div style={s.cardHeader}>
                                    <h3 style={s.serviceName}>
                                        {b?.serviceTitle}
                                    </h3>

                                    <span style={s.badge}>
                                        {b?.bookingStatus}
                                    </span>
                                </div>

                                <p style={s.price}>₹{b?.price}</p>

                                <p style={s.description}>
                                    {b?.serviceDescription}
                                </p>

                                {/* bookingDate */}
                                <p style={s.description} className="">
                                    Booking Date :{" "}
                                    {new Date(
                                        b?.bookingDate,
                                    ).toDateString()}{" "}
                                </p>

                                <div className=" ">
                                    <button className="px-3 py-1   w-20 rounded-lg text-white cursor-pointer"
                                    style={{
                                        background:"linear-gradient(135deg, #2563eb, #3b82f6)",
                                    }}
                                    > Cancel</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={s.emptyBox}>
                            <p style={s.emptyText}>No Bookings Found</p>
                        </div>
                    )}
                </div>
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

export default UserBookings;

const s = {
    page: {
        minHeight: "100vh",
        background: "#F5F7FB",
        fontFamily: "'Inter', sans-serif",
    },

    container: {
        maxWidth: 900,
        margin: "0 auto",
        padding: "30px 18px",
        marginBottom: "40px",
    },

    heading: {
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 20,
        color: "#111827",
    },

    cardsColumn: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
    },

    card: {
        background: "#ffffff",
        borderRadius: 14,
        padding: "22px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        transition: "all .25s ease",
    },

    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    serviceName: {
        fontSize: 20,
        fontWeight: 700,
        color: "#111827",
        textTransform: "capitalize",
    },

    badge: {
        background: "#E0F2FE",
        color: "#0284C7",
        fontSize: 12,
        fontWeight: 600,
        padding: "5px 12px",
        borderRadius: 20,
    },

    price: {
        // fontSize: 26,
        fontWeight: 800,
        color: "#2563EB",
        marginBottom: 10,
    },

    description: {
        fontSize: 14,
        color: "#6B7280",
        lineHeight: 1.6,
    },

    emptyBox: {
        background: "#fff",
        padding: 30,
        borderRadius: 12,
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    },

    emptyText: {
        color: "#6B7280",
        fontSize: 15,
        fontWeight: 500,
    },
};
