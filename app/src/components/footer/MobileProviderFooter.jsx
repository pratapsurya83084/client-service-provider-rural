import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeIcon = ({ active }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z"
            fill={active ? "#3B9EE8" : "none"}
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ServicesIcon = ({ active }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="11"
            cy="11"
            r="7.5"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
        />
        <path
            d="M17 17L21 21"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

// const BookingsIcon = ({ active }) => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect
//       x="3"
//       y="4"
//       width="18"
//       height="17"
//       rx="2"
//       stroke={active ? '#3B9EE8' : '#9CA3AF'}
//       strokeWidth="1.8"
//     />
//     <path
//       d="M3 9H21"
//       stroke={active ? '#3B9EE8' : '#9CA3AF'}
//       strokeWidth="1.8"
//       strokeLinecap="round"
//     />
//     <path
//       d="M8 2V6M16 2V6"
//       stroke={active ? '#3B9EE8' : '#9CA3AF'}
//       strokeWidth="1.8"
//       strokeLinecap="round"
//     />
//     <path
//       d="M7 13H9M11 13H13M15 13H17M7 16H9M11 16H13"
//       stroke={active ? '#3B9EE8' : '#9CA3AF'}
//       strokeWidth="1.6"
//       strokeLinecap="round"
//     />
//   </svg>
// )
const AddIcon = ({ active }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="12"
            r="9"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
        />
        <path
            d="M12 8V16"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
            strokeLinecap="round"
        />
        <path
            d="M8 12H16"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

const RequestIcon = ({ active }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="2"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
        />
        <path
            d="M8 9H16"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
            strokeLinecap="round"
        />
        <path
            d="M8 13H13"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

const ProfileIcon = ({ active }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="12"
            cy="8"
            r="3.5"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
        />
        <path
            d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
            stroke={active ? "#3B9EE8" : "#9CA3AF"}
            strokeWidth="1.8"
            strokeLinecap="round"
        />
    </svg>
);

const tabs = [
    { id: "/", label: "Home", Icon: HomeIcon },
    { id: "services", label: "Services", Icon: ServicesIcon },
    // { id: 'Add', label: 'Add', Icon: AddIcon },
    { id: "Request", label: "Request", Icon: RequestIcon },
    { id: "profile", label: "Profile", Icon: ProfileIcon },
];

const MobileProviderFooter = () => {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <footer
            className="flex md:hidden"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#ffffff",
                borderTop: "1px solid #E5E7EB",
                paddingBottom: "env(safe-area-inset-bottom)",
                zIndex: 50,
                boxShadow: "0 -1px 8px rgba(0,0,0,0.06)",
            }}
        >
            {tabs.map(({ id, label, Icon }) => {
                const active = activeTab === label.toLowerCase();

                return (
                    <Link
                        key={id}
                        to={`/${id.toLowerCase()}`}
                        onClick={() => setActiveTab(id)}
                        className="flex flex-col justify-center items-center flex-1 pt-[10px] pb-[10px]"
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        <Icon active={active} />

                        <span
                            style={{
                                fontSize: "11px",
                                fontFamily:
                                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                                fontWeight: active ? "600" : "400",
                                color: active ? "#3B9EE8" : "#9CA3AF",
                                letterSpacing: "0.01em",
                                lineHeight: 1,
                            }}
                        >
                            {label}
                        </span>
                    </Link>
                );
            })}
        </footer>
    );
};

export default MobileProviderFooter;
