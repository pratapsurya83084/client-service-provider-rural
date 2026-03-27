import { useContext, useEffect, useState } from "react";
import MobileProviderFooter from "../../components/footer/MobileProviderFooter";
import Requests from "./UserRequestForBookings/Requests";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext/CreateContext";

//const pendingRequests = []; // empty to show "No pending requests"

// const stats = [
//     { label: "Services", value: 2, color: "text-slate-800" },
//     { label: "Bookings", value: 2, color: "text-slate-800" },
//     { label: "Pending", value: 0, color: "text-amber-500" },
// ];

export default function ProviderDashboard() {
    const [services, setServices] = useState([]);
    const [BookingReq, setBookingsRequest] = useState([]);
    const navigate = useNavigate();

    const {
        GetProviderSpecificServices,
        getProviderRequestSendedByCustomerforBooking,
    } = useContext(UserContext);
    

    const token = localStorage.getItem("token");

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
    // console.log(BookingReq);
    //only confirmed booking show i.e booking show here
    const BookingsCount = BookingReq.filter(
        (b) => b.bookingStatus === "Confirmed",
    );

    // console.log(BookingsCount);

    useEffect(() => {
        fetchRequestedBookings();
    }, []);

    const AddService = () => {
        navigate("/addservicebyprovider");
    };

    const User = JSON.parse(localStorage.getItem("userAuth"));
    if (User === undefined) {
        navigate("/login");
        return;
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

    // console.log("services :",services)

    const pendingServices = services.filter((s) => !s.isActive);

    //  console.log(pendingServices)

    useEffect(() => {
        GetProviderSpecificServ();
    }, []);

    return (
        <div className="min-h-screen mt-10 bg-slate-100 flex items-center justify-center p- font-sans">
            <div className="w-full max-w-2xl bg-slate-100 rounded-3xl min-h-screen p-5 space-y-5">
                {/* Top label */}
                <div className="pt-4">
                    <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
                        Provider Dashboard
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                        <h1 className="text-2xl font-bold text-slate-800">
                            {User[0]?.username}
                        </h1>
                        <span className="text-2xl">🧑‍🌾</span>
                        <span className="text-2xl">✏️</span>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-2xl px-4 py-4 shadow-sm border border-slate-100 flex flex-col gap-1">
                        <span className={`text-xl font-bold `}>
                            {services?.length}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                            services
                        </span>
                    </div>

                    <div className="bg-white rounded-2xl px-4 py-4 shadow-sm border border-slate-100 flex flex-col gap-1">
                        <span className={`text-xl font-bold `}>
                            {BookingsCount?.length}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                            Bookings
                        </span>
                    </div>

                    <div className="bg-white rounded-2xl px-4 py-4 shadow-sm border border-slate-100 flex flex-col gap-1">
                        <span className={`text-xl font-bold `}>
                            {pendingServices?.length}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                            Pending
                        </span>
                    </div>
                </div>

                {/* Add New Service Button */}
                <button
                    onClick={AddService}
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-2xl py-3.5 flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-blue-200 text-sm"
                >
                    <span className="text-lg leading-none">+</span>
                    Add New Service
                </button>

                {/* Pending Requests */}
                <div className="mb-10">
                    <div className=" rounded-2xl px- py-5  shadow-sm border border-slate-100">
                        <Requests />
                    </div>
                </div>
            </div>

            {/* provider footer */}
            {User?.[0]?.role === "Provider" && <MobileProviderFooter />}

            <style>{`
        @keyframes slide-up {
          from { transform: translateY(60px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
        </div>
    );
}
