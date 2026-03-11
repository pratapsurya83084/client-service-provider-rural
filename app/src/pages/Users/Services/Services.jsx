import React, { useState } from "react";
import MobileFooter from "../../../components/footer/MobileFooter";

const services = [
    {
        id: 1,
        name: "drone sprayer",
        category: "Agriculture Equipment",
        code: "12233",
        provider: "dronwala",
        price: "₹2000",
    },
    {
        id: 2,
        name: "tractor transport bussiness",
        category: "Water Tanker",
        code: "1",
        provider: "dronwala",
        price: "₹1",
    },
    {
        id: 3,
        name: "soil testing kit",
        category: "Agriculture Equipment",
        code: "33412",
        provider: "agritech",
        price: "₹500",
    },
    {
        id: 4,
        name: "water pump rental",
        category: "Water Tanker",
        code: "88210",
        provider: "waterpro",
        price: "₹750",
    },
    {
        id: 5,
        name: "electric fence setup",
        category: "Electrical",
        code: "44501",
        provider: "voltfarm",
        price: "₹3200",
    },
    {
        id: 6,
        name: "seed broadcaster",
        category: "Agriculture Equipment",
        code: "99123",
        provider: "agritech",
        price: "₹1200",
    },
];

const categories = [
    "All",
    "Agriculture Equipment",
    "Water Tanker",
    "Electrical",
];

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
            strokeLinejoin="round"
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
            strokeLinejoin="round"
        />
    </svg>
);

const Services = () => {

    const [activeTab, setActiveTab] = useState("services");
    
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = services.filter((s) => {
        const matchCat =
            activeCategory === "All" || s.category === activeCategory;
        const matchSearch =
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.category.toLowerCase().includes(search.toLowerCase()) ||
            s.provider.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

  // get UserAuth
  const User =  JSON.parse(localStorage.getItem("userAuth"));
//   console.log("profile :",User);


    return (
        <div>
            <div style={styles.pageWrapper}>
                <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .service-card {
          background: #fff;
          border-radius: 14px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          transition: box-shadow 0.18s ease, transform 0.18s ease;
          cursor: pointer;
          animation: fadeUp 0.35s ease both;
        }
        .service-card:hover {
          box-shadow: 0 4px 16px rgba(59,158,232,0.13);
          transform: translateY(-2px);
        }

        .cat-btn {
          border: none;
          border-radius: 20px;
          padding: 7px 16px;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.15s, color 0.15s;
        }
        .cat-btn.active {
          background: #3B9EE8;
          color: #fff;
        }
        .cat-btn.inactive {
          background: #fff;
          color: #374151;
        }
        .cat-btn.inactive:hover {
          background: #E8F4FD;
          color: #3B9EE8;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          color: #374151;
        }
        .search-input::placeholder { color: #9CA3AF; }

        .scroll-cats {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scroll-cats::-webkit-scrollbar { display: none; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cards-grid {
          display: grid;
          gap: 10px;
          grid-template-columns: 1fr;
        }

        @media (min-width: 640px) {
          .cards-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .cards-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
      `}</style>

                <div style={styles.container}>
                    {/* Header */}
                    <div style={styles.header}>
                        <h1 style={styles.title}>Services</h1>
                        <p style={styles.subtitle}>Find the help you need</p>
                    </div>

                    {/* Search */}
                    <div style={styles.searchBar}>
                        <SearchIcon />
                        <input
                            className="search-input"
                            placeholder="Search services..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Category Filter */}
                    <div style={styles.catRow}>
                        <button style={styles.navBtn}>
                            <ChevronLeft />
                        </button>
                        <div className="scroll-cats">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`cat-btn ${activeCategory === cat ? "active" : "inactive"}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <button style={styles.navBtn}>
                            <ChevronRight />
                        </button>
                    </div>

                    {/* Divider */}
                    <div style={styles.divider} />

                    {/* Cards */}
                    {filtered.length === 0 ? (
                        <div style={styles.empty}>No services found.</div>
                    ) : (
                        <div className="cards-grid">
                            {filtered.map((s, i) => (
                                <div
                                    className="service-card"
                                    key={s.id}
                                    style={{ animationDelay: `${i * 0.06}s` }}
                                >
                                    <div>
                                        <p style={styles.cardName}>{s.name}</p>
                                        <p style={styles.cardMeta}>
                                            {s.category} · {s.code}
                                        </p>
                                        <p style={styles.cardProvider}>
                                            by {s.provider}
                                        </p>
                                    </div>
                                    <span style={styles.price}>{s.price}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
                 {/* farmer Footer */}
    {User?.[0].role==="Farmer"&&( <MobileFooter activeTab={activeTab} setActiveTab={setActiveTab} />)}
          
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
