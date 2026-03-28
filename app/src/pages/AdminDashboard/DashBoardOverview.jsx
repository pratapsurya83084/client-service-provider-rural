import React, { useContext, useEffect, useState } from "react";

import AdminContext from "../../AdminContext/CreateAdminContext";

const DashBoardOverview = () => {
    const {
        FetchAllUsers,
        FetchAllProviders,
        FetchBookings,
        FetchAllServices,
        FetchAllCategories,
    } = useContext(AdminContext);
    const [users, setUsers] = useState([]);
    const [Providers, SetProviders] = useState([]);
    const [Bookings, setBookings] = useState([]);
    const [services, setServices] = useState([]);
    const [Categories, setCategories] = useState([]);

    const data = [
        // { count: 4, label: "Total Users" } ,
        // { count: 4, label: "Total Providers" },

        // { count: 4, label: "Total Bookings" },
        // { count: 4, label: "Active Bookings" },
        // { count: 4, label: "Total Services" },
        { count: 4, label: "Total Categories" },
    ];

    const token = localStorage.getItem("token");

    async function fetchAllUsers() {
        if (!token) {
            toast.error("token expired ,Login Please");
            return;
        }
        try {
            const res = await FetchAllUsers(token);
            // console.log("user list : " ,res);
            if (res.success) {
                setUsers(res.data);
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("error while fetching all Users :", error);
        }
    }
    async function fetchProviders() {
        if (!token) {
            toast.error("token expired ,Login Please");
            return;
        }
        try {
            const res = await FetchAllProviders(token);
            // console.log(res)
            if (res.success) {
                SetProviders(res.providers);
                // console.log("providers list :", res.providers);
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("Error while fetching Providers : ", error);
        }
    }
    async function fetchBookings() {
        if (!token) {
            toast.error("token expired ,Login Please");
            return;
        }
        try {
            const res = await FetchBookings(token);
            if (res.success) {
                setBookings(res.data);
                // console.log("Bookings list :", res.data);
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("Error while fetching Bookings : ", error);
        }
    }
    async function fetchAllServices() {
        if (!token) {
            toast.error("Session expired ,Login please");
            return;
        }
        try {
            const res = await FetchAllServices(token);
            // console.log("services : ", res);
            if (res.success) {
                setServices(res.data);
                return;
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("error while fetching all Services :", error);
            return;
        }
    }
    async function fetchCatgory() {
        if (!token) {
            toast.error("Unauthorized User ,Please Login");
            return;
        }
        try {
            const res = await FetchAllCategories(token);
            // console.log("cat list :",res);
            if (res.success) {
                setCategories(res?.category || []);
            } else {
                toast.error(res.message);
                return;
            }
        } catch (error) {
            console.log("error while fetching categories :", error);
            return;
        }
    }

    useEffect(() => {
        fetchAllUsers();
        fetchProviders();
        fetchBookings();
        fetchAllServices();
        fetchCatgory();
    }, []);

    return (
        <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] text-white px-6 py-8">
            <h1 className="text-[26px] font-extrabold text-[#e6edf3] tracking-tight">
                Dashboard{" "}
            </h1>
            <p className="text-gray-500">System Overview and Statistics</p>
            {/* <AdminNavbar/> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 ">
                {/* users length */}
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white">
                    <h1 className="text-3xl font-bold">{users?.length}</h1>
                    <p className="text-sm text-gray-300 mt-2">Users</p>
                </div>

                {/*  */}
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white">
                    <h1 className="text-3xl font-bold">{Providers?.length}</h1>
                    <p className="text-sm text-gray-300 mt-2">Providers</p>
                </div>

                {/* Bookings */}
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white">
                    <h1 className="text-3xl font-bold">{Bookings?.length}</h1>
                    <p className="text-sm text-gray-300 mt-2">Bookings</p>
                </div>

                {/* services */}
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white">
                    <h1 className="text-3xl font-bold">{services?.length}</h1>
                    <p className="text-sm text-gray-300 mt-2">Services</p>
                </div>

                {/* Categories */}
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-white">
                    <h1 className="text-3xl font-bold">{Categories?.length}</h1>
                    <p className="text-sm text-gray-300 mt-2">Categories</p>
                </div>
            </div>
        </div>
    );
};

export default DashBoardOverview;
