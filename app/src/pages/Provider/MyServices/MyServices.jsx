import React, { useContext, useEffect, useState } from "react";
import MobileProviderFooter from "../../../components/footer/MobileProviderFooter";
import { UserContext } from "../../../UserContext/CreateContext";


const MyServices = () => {
    const [loading, setLoading] = useState(true);
    const { GetProfile, GetProviderSpecificServices } = useContext(UserContext);
    const [services, setServices] = useState([]);

    const token = localStorage.getItem("token");

    // const token = Cookies.get("token");
    async function getUserProfile() {
        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        try {
            const res = await GetProfile(token);
            localStorage.setItem("userAuth", JSON.stringify(res));
            setLoading(false);
        } catch (error) {
            console.log("error while fetching profile :", error);
        }
    }

    async function GetProviderSpecificServ() {
        if (!token) {
            return;
        }

        try {
            const res = await GetProviderSpecificServices(token);

            if (res.success) {
                // console.log(res.data);
                setServices(res.data || []);
                return;
            } else {
                toast.error(res.message || "Something wrong!");
                return;
            }
        } catch (error) {
            console.log("error while fetching profile :", error);
            return;
        }
    }

    useEffect(() => {
        getUserProfile();
        GetProviderSpecificServ();
    }, []);

    // get UserAuth
    const User = JSON.parse(localStorage.getItem("userAuth"));

    const handleDeactivate = (id) => {
        console.log("Deactivate service:", id);
    };

    const handleDelete = (id) => {
        console.log("Delete service:", id);
    };

    return (
        <div className="bg-blue-50  pb-20  md:pb-0">
            <div style={styles.container}>
                <h1 style={styles.heading}>My Services</h1>
                <p style={styles.subheading}>
                    {services.length} services listed
                </p>

                <div style={styles.list}>
                    {services.length === 0 && !loading ? (
                        <p style={styles.empty}>No services listed yet.</p>
                    ) : (
                        services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                onDeactivate={handleDeactivate}
                                onDelete={handleDelete}
                            />
                        ))
                    )}
                </div>
            </div>
            {/* provider footer */}
            {!loading && User?.[0]?.role === "Provider" && (
                <MobileProviderFooter />
            )}
        </div>
    );
};

export default MyServices;

const ServiceCard = ({ service, onDeactivate, onDelete }) => {
    return (
        <div style={styles.card}>
            <div style={styles.cardHeader}>
                <span style={styles.serviceName}>{service?.title}</span>
                <span
                    style={{
                        ...styles.badge,
                        backgroundColor:
                            service?.isActive  ? "#e6f4ea" : "#f3f3f3",
                        color:  service?.isActive   ? "#2e7d32" : "#757575",
                    }}
                >
                    {service.isActive?"Active":"Pending"}
                </span>
            </div>

            <p style={styles.serviceDetails}>
                {service.category}  ₹. {service?.price}
                {service.range ? ` - ${service.range}` : ""}
            </p>

            <div style={styles.actions}>
                <button
                    style={styles.deactivateBtn}
                    onClick={() => onDeactivate(service?.id)}
                >
                    Deactivate
                </button>
                <button
                    style={styles.deleteBtn}
                    onClick={() => onDelete(service.id)}
                >
                    Delete
                </button>
            </div>
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
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
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
    serviceDetails: {
        fontSize: 13,
        color: "#888",
        margin: "0 0 14px",
    },
    actions: {
        display: "flex",
        gap: 10,
    },
    deactivateBtn: {
        backgroundColor: "transparent",
        border: "1.5px solid #3B9EE8",
        color: "#3B9EE8",
        borderRadius: 8,
        padding: "7px 16px",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
    },
    deleteBtn: {
        backgroundColor: "#e53935",
        border: "none",
        color: "#fff",
        borderRadius: 8,
        padding: "7px 16px",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
    },
};
