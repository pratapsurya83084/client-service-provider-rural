import React, { useContext, useEffect, useState } from "react";
import MobileProviderFooter from "../../../components/footer/MobileProviderFooter";
import { UserContext } from "../../../UserContext/CreateContext";
import { toast, Toaster } from "react-hot-toast";
import {useNavigate}  from 'react-router-dom';
import NavBar from "../../../components/NavBar";
const categories = [
    "Agriculture Equipment",
    "Water Tanker",
    "Transport",
    "Construction",
    "Electrical",
    "Plumbing",
    "Other",
];

const AddServices = () => {
    const [loading, setLoading] = useState(true);
    const { GetProfile, AddService } = useContext(UserContext);
 const [tabname ,settabname] = useState("addservicebyprovider");
    const [form, setForm] = useState({
        title: "",
        category: "",
        price: "",
        district: "",
        description: "",
    });
    const navigate = useNavigate();

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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Submitting service:", form);
        try {
            const res = await AddService(
                token,
                form.title,
                form.category,
                form.price,
                form.district,
                form.description,
            );
            if (res.success) {
                // console.log("added service :", res);
                toast.success(res.message);
                setForm({
                    title: "",
                    category: "",
                    price: "",
                    district: "",
                    description: "",
                });
                navigate("/myservices");
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("error while adding services :", error);
            return;
        }
    };

    return (
        <div style={styles.page}>
               <NavBar/>
            <Toaster position="top-center" reverseOrder={false} />
            <div style={styles.container}>
                {/* Header */}
                <h1 style={styles.heading}>Add Service</h1>
                <p style={styles.subheading}>
                    List a new service for customers
                </p>

                {/* Form Card */}
                <form onSubmit={handleSubmit} style={styles.card}>
                    {/* Service Title */}
                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>
                            SERVICE TITLE <span style={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="e.g., Tractor for Ploughing"
                            style={styles.input}
                            required
                        />
                    </div>

                    {/* Category */}
                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>
                            CATEGORY <span style={styles.required}>*</span>
                        </label>
                        <div style={styles.selectWrapper}>
                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                style={styles.select}
                                required
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            <span style={styles.selectArrow}>&#8964;</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>
                            PRICE (₹) <span style={styles.required}>*</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            placeholder="e.g., 1500"
                            style={styles.input}
                            required
                        />
                    </div>

                    {/* District */}
                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>
                            DISTRICT <span style={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            name="district"
                            value={form.district}
                            onChange={handleChange}
                            placeholder="e.g., Nashik"
                            style={styles.input}
                            required
                        />
                    </div>

                    {/* Description */}
                    <div style={styles.fieldGroup}>
                        <label style={styles.label}>DESCRIPTION</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Describe your service..."
                            style={styles.textarea}
                            rows={4}
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" style={styles.submitBtn}>
                        <span style={styles.checkIcon}>✅</span> Add Service
                    </button>
                </form>
            </div>

            {/* Provider Footer */}
            {!loading && User?.[0]?.role === "Provider" && (
                <MobileProviderFooter tabname={tabname}  settabname={settabname}/>
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
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: "24px 20px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
    },
    fieldGroup: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
    },
    label: {
        fontSize: 11,
        fontWeight: 600,
        color: "#555",
        letterSpacing: "0.05em",
    },
    required: {
        color: "#e53935",
    },
    input: {
        border: "1.5px solid #e0e0e0",
        borderRadius: 10,
        padding: "12px 14px",
        fontSize: 14,
        color: "#1a1a2e",
        backgroundColor: "#fafafa",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        transition: "border-color 0.2s",
    },
    selectWrapper: {
        position: "relative",
        width: "100%",
    },
    select: {
        border: "1.5px solid #e0e0e0",
        borderRadius: 10,
        padding: "12px 40px 12px 14px",
        fontSize: 14,
        color: "#1a1a2e",
        backgroundColor: "#fafafa",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        appearance: "none",
        cursor: "pointer",
    },
    selectArrow: {
        position: "absolute",
        right: 14,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: 18,
        color: "#888",
        pointerEvents: "none",
    },
    textarea: {
        border: "1.5px solid #e0e0e0",
        borderRadius: 10,
        padding: "12px 14px",
        fontSize: 14,
        color: "#1a1a2e",
        backgroundColor: "#fafafa",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        resize: "vertical",
        minHeight: 100,
        fontFamily: "inherit",
    },
    submitBtn: {
        backgroundColor: "#2979ff",
        color: "#fff",
        border: "none",
        borderRadius: 12,
        padding: "15px",
        fontSize: 15,
        fontWeight: 600,
        cursor: "pointer",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginTop: 4,
    },
    checkIcon: {
        fontSize: 16,
    },
};

export default AddServices;
