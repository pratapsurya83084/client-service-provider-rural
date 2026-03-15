import React, { useContext, useEffect, useState } from "react";
import MobileFooter from "../../../components/footer/MobileFooter";
import AdminContext from "../../../AdminContext/CreateAdminContext";
import { toast ,Toaster} from "react-hot-toast";
import { UserContext } from "../../../UserContext/CreateContext";
import NavBar from "../../../components/NavBar";
import { Link } from "react-router-dom";




const SearchIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7.5" stroke="#9CA3AF" strokeWidth="2" />
        <path
            d="M17 17L21 21"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const ChevronLeft = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
            d="M15 18L9 12L15 6"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const ChevronRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
            d="M9 18L15 12L9 6"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const Services = () => {
    const [activeTab, setActiveTab] = useState("services");
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [Categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);
    
 

    const { FetchAllCategories } = useContext(AdminContext);
    const { GetAllServices } = useContext(UserContext);

    const token = localStorage.getItem("token");
    const User = JSON.parse(localStorage.getItem("userAuth"));

    async function fetchCatgory() {
        if (!token) {
            toast.error("Unauthorized User ,Please Login");
            return;
        }

        try {
            const res = await FetchAllCategories(token);

            if (res.success) {
                const cats = [{ id: 0, name: "All" }, ...(res.category || [])];

                setCategories(cats);
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("error while fetching categories :", error);
        }
    }

    //  GetAllServices
    async function fetchGetAllServices() {
        if (!token) {
            toast.error("Unauthorized User ,Please Login");
            return;
        }

        try {
            const res = await GetAllServices(token);

            if (res.success) {
                // console.log(res.data);
                setServices(res.data);
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            console.log("error while fetching categories :", error);
        }
    }

    useEffect(() => {
        fetchGetAllServices();
        fetchCatgory();
    }, []);

    const filtered = services.filter((s) => {
        const matchCat =
            activeCategory === "All" ||
            s.category === activeCategory ||
            s.district === activeCategory;

        const matchSearch =
            s.title.toLowerCase().includes(search.toLowerCase()) ||
            s.description.toLowerCase().includes(search.toLowerCase());

        return matchCat && matchSearch;
    });

    return (
        <div>
            <div style={styles.pageWrapper}>
                   <NavBar/>

                   <Toaster position="top-center" reverseOrder={false} />
                <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

                *{box-sizing:border-box;margin:0;padding:0;}

                .service-card{
                  background:#fff;
                  border-radius:14px;
                  padding:16px 18px;
                  display:flex;
                  align-items:center;
                  justify-content:space-between;
                  box-shadow:0 1px 4px rgba(0,0,0,0.06);
                  transition:.18s;
                  cursor:pointer;
                }

                .service-card:hover{
                  box-shadow:0 4px 16px rgba(59,158,232,0.13);
                  transform:translateY(-2px);
                }

                .cat-btn{
                  border:none;
                  border-radius:20px;
                  padding:7px 16px;
                  font-size:13px;
                  font-family:'DM Sans';
                  font-weight:500;
                  cursor:pointer;
                  white-space:nowrap;
                }

                .cat-btn.active{
                  background:#3B9EE8;
                  color:#fff;
                }

                .cat-btn.inactive{
                  background:#fff;
                  color:#374151;
                }

                .scroll-cats{
                  display:flex;
                  gap:8px;
                  overflow-x:auto;
                }

                .cards-grid{
                  display:grid;
                  gap:10px;
                  grid-template-columns:1fr;
                }

                @media (min-width:640px){
                  .cards-grid{grid-template-columns:1fr 1fr;}
                }

                @media (min-width:1024px){
                  .cards-grid{grid-template-columns:1fr 1fr 1fr;}
                }

                `}</style>

                <div style={styles.container}>
                    <div style={styles.header}>
                        <h1 style={styles.title}>Services</h1>
                        <p style={styles.subtitle}>Find the help you need</p>
                    </div>

                    <div style={styles.searchBar}>
                        <SearchIcon />
                        <input
                            className="search-input  rounded-full px-3 py-1 w-full border border-gray-200 focus:border-gray-300 focus:outline-none"
                            placeholder="Search services..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div style={styles.catRow}>
                        <button style={styles.navBtn}>
                            <ChevronLeft />
                        </button>

                        <div className="scroll-cats">
                            {Categories?.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`cat-btn ${activeCategory === cat.name ? "active" : "inactive"}`}
                                    onClick={() => setActiveCategory(cat.name)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        <button style={styles.navBtn}>
                            <ChevronRight />
                        </button>
                    </div>

                    <div style={styles.divider} />

                    {filtered.length === 0 ? (
                        <div style={styles.empty}>No services found.</div>
                    ) : (
                        <div className="cards-grid">
                            {filtered.map((s) => (
                                <div className="service-card" key={s?.id}>
                                    <Link to={`/bookservice/${s?.id}`}>
                                        <p style={styles.cardName}>
                                            {s?.title}
                                        </p>
                                        <p style={styles.cardMeta}>
                                            {s?.district}
                                        </p>
                                        <p style={styles.cardMeta}>
                                            {s?.category}
                                        </p>
                                        <p style={styles.cardProvider}>
                                            by {s?.providerName}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {s?.description}
                                        </p>
                                    </Link>

                                    <span style={styles.price}>
                                        ₹. {s?.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {User?.[0]?.role === "Farmer" && (
                <MobileFooter
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            )}
        </div>
    );
};

export default Services;

const styles = {
    pageWrapper: {
        minHeight: "100vh",
        backgroundColor: "#EEF2F7",
        fontFamily: "'DM Sans', sans-serif",
        padding: "0",
    },
    container: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "28px 16px 40px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
    },
    header: {
        paddingBottom: "4px",
    },
    title: {
        fontSize: "26px",
        fontWeight: "700",
        color: "#111827",
        letterSpacing: "-0.4px",
        lineHeight: 1.2,
    },
    subtitle: {
        fontSize: "14px",
        color: "#6B7280",
        marginTop: "3px",
        fontWeight: "400",
    },
    searchBar: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "12px 16px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    },
    catRow: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },
    navBtn: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
    },
    divider: {
        height: "1px",
        backgroundColor: "#E5E7EB",
        marginTop: "-4px",
        marginBottom: "-4px",
    },
    cardName: {
        fontSize: "15px",
        fontWeight: "600",
        color: "#111827",
        marginBottom: "3px",
        textTransform: "capitalize",
    },
    cardMeta: {
        fontSize: "12.5px",
        color: "#6B7280",
        fontWeight: "400",
        marginBottom: "2px",
    },
    cardProvider: {
        fontSize: "12px",
        color: "#9CA3AF",
    },
    price: {
        fontSize: "16px",
        fontWeight: "700",
        color: "#3B9EE8",
        flexShrink: 0,
        marginLeft: "12px",
    },
    empty: {
        textAlign: "center",
        color: "#9CA3AF",
        fontSize: "14px",
        padding: "40px 0",
    },
};
