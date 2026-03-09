
import MobileFooter from "../../../components/footer/MobileFooter";
import React, { useState } from "react";

// ── Profile Page
const Profile = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [name, setName] = useState("vivek");
    const [email, setEmail] = useState("");
    const [saved, setSaved] = useState(false);

    const user = { name: "vivek", role: "Customer", id: 7 };

    const handleSave = () => {
        if (!name.trim()) return;
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <div className="min-h-screen bg-[#EEF2F7] font-sans">
            {/* Success toast */}
            {saved && (
                <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-sm font-semibold px-5 py-3 rounded-xl z-[999] shadow-lg whitespace-nowrap animate-bounce">
                    ✅ Changes saved!
                </div>
            )}

            <div className="max-w-[480px] mx-auto px-4 pt-7 pb-28 flex flex-col gap-4">
                {/* Page title */}
                <h1 className="text-[26px] font-extrabold text-gray-900 tracking-tight">
                    Profile
                </h1>

                {/* Avatar card */}
                <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center py-7 gap-2">
                    {/* Avatar circle */}
                    <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                        style={{
                            background:
                                "linear-gradient(135deg, #818cf8, #6366f1)",
                        }}
                    >
                        {user.name.charAt(0).toUpperCase()}
                    </div>

                    <p className="text-[17px] font-bold text-gray-900 mt-1">
                        {user.name}
                    </p>
                    <p className="text-[13px] text-gray-400 font-medium">
                        {user.role}
                    </p>

                    <span className="text-[12px] font-semibold text-[#3B9EE8] bg-blue-50 border border-blue-100 rounded-full px-3 py-0.5 mt-0.5">
                        ID: {user.id}
                    </span>
                </div>

                {/* Edit form card */}
                <div className="bg-white rounded-2xl shadow-sm px-5 py-5 flex flex-col gap-4">
                    <h2 className="text-[16px] font-bold text-gray-900">
                        Edit Profile
                    </h2>

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 outline-none focus:border-[#3B9EE8] transition-colors duration-150 bg-white"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                            Email (Optional)
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-800 outline-none focus:border-[#3B9EE8] transition-colors duration-150 bg-white"
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* Save button */}
                    <button
                        onClick={handleSave}
                        disabled={!name.trim()}
                        className="w-full bg-[#3B9EE8] hover:bg-[#2d8fd4] disabled:bg-blue-200 text-white font-bold text-[15px] py-3.5 rounded-xl transition-colors duration-150 cursor-pointer mt-1"
                    >
                        Save Changes
                    </button>
                </div>

                {/* Logout button */}
                <button className="w-full bg-[#EF4444] hover:bg-[#dc2626] text-white font-bold text-[15px] py-3.5 rounded-xl transition-colors duration-150 cursor-pointer">
                    Logout
                </button>
            </div>
            <MobileFooter activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
};

export default Profile;
