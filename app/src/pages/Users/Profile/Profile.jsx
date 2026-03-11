import MobileFooter from "../../../components/footer/MobileFooter";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext/CreateContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// ── Profile Page
const Profile = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [name, setName] = useState("NA");
    const [email, setEmail] = useState("NA");
    const [saved, setSaved] = useState(false);
    const { GetProfile } = useContext(UserContext);
    const token = localStorage.getItem("token");
    const [Profile, setProfile] = useState([]);

    const navigate = useNavigate();

    async function getUserProfile() {
        if (!token) {
            // console.log("User token  in:", token);
            toast.error("token not found");
            return;
        }
        try {
            const res = await GetProfile(token);
            localStorage.setItem("userAuth", JSON.stringify(res));
            // console.log("profile is :", res);
            setEmail(res[0].email);
            setName(res[0].username);
            setProfile(res);
        } catch (error) {
            console.log("error while fetching profile :", error);
        }
    }

    useEffect(() => {
        getUserProfile();
    }, []);

    const LogoutUser = () => {
        //clear all local storage auth
        localStorage.removeItem("token");
        localStorage.removeItem("ExpireTime");
        localStorage.removeItem("userAuth");
        toast.success("Logout SuccessFull");
        setTimeout(()=>{
            navigate("/login")
        },1000);
    };

    // const user = { name: "vivek", role: "Customer", id: 7 } ;
    //   const user = { email,mobileNumber,role } = Profile;
    const handleSave = () => {
        if (!name.trim()) return;
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };



      // get UserAuth
  const User =  JSON.parse(localStorage.getItem("userAuth"));

//   console.log("profile :",User);


    return (
        <div className="min-h-screen bg-[#EEF2F7] font-sans">
            {/* Success toast */}
            {saved && (
                <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-sm font-semibold px-5 py-3 rounded-xl z-[999] shadow-lg whitespace-nowrap animate-bounce">
                    ✅ Changes saved!
                </div>
            )}

            <div className="max-w-[480px] mx-auto px-4 pt-7 pb-28 flex flex-col gap-4">
               <Toaster position="top-center" reverseOrder={false} />
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
                        {Profile[0]?.username?.charAt(0).toUpperCase() || "NA"}
                    </div>

                    <p className="text-[17px] font-bold text-gray-900 mt-1">
                        {Profile[0]?.username || "NA"}
                    </p>
                    <p className="text-[13px] text-gray-400 font-medium">
                        {Profile[0]?.role || "NA"}
                    </p>

                    <span className="text-[12px] font-semibold text-[#3B9EE8] bg-blue-50 border border-blue-100 rounded-full px-3 py-0.5 mt-0.5">
                        ID: {Profile[0]?.id || "NA"}
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
                <button
                    onClick={LogoutUser}
                    className="w-full bg-[#EF4444] hover:bg-[#dc2626] text-white font-bold text-[15px] py-3.5 rounded-xl transition-colors duration-150 cursor-pointer"
                >
                    Logout
                </button>
            </div>
     {/* farmer Footer */}
    {User?.[0]?.role==="Farmer"&&( <MobileFooter activeTab={activeTab} setActiveTab={setActiveTab} />)}
       
         
        </div>
    );
};

export default Profile;
