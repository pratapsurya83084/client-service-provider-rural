import React from "react";
import AdminContext from "./CreateAdminContext";
import axios from "axios";
import { BACKEND_URL } from "../lib/ApiConnection";

const AdminState = ({ children }) => {
    function isTokenExpired() {
        const expireTime = localStorage.getItem("ExpireTime");

        if (!expireTime) return true;

        return Date.now() > expireTime;
    }
    // const token = localStorage.getItem("token");

    // if expire token then clear all tokens and userauth,tec.
    const ClearLocalauth = () => {
        if (isTokenExpired()) {
            localStorage.removeItem("token");
            localStorage.removeItem("ExpireTime");
            localStorage.removeItem("userAuth");
            toast.error("Session is Expired ,Login Please");
            console.log("check token expire time before getprofile");
            // navigate("/login");
            return;
        }
        return false;
    };

    //    fetch all Usrs
    const FetchAllUsers = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(`${BACKEND_URL}users/get-alluser`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            return res.data;
        } catch (error) {
            console.log("error while fetching users :", error);
        }
    };

    //providers lists
    const FetchAllProviders = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(`${BACKEND_URL}users/get-provider`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            return res.data;
        } catch (error) {
            console.log("error while fetching users :", error);
        }
    };

    //services list
    const FetchAllServices = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(
                `${BACKEND_URL}service-provider/getallServices`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while fetching users :", error);
        }
    };

    // booking list
    const FetchBookings = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(
                `${BACKEND_URL}booking/getallbookings`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while fetching users :", error);
        }
    };

    //add categories
    const AddCategories = async (token, Name, Description) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.post(
                `${BACKEND_URL}categories/add`,
                { Name, Description },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while fetching users :", error);
        }
    };

    //all categories view
    const FetchAllCategories = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(
                `${BACKEND_URL}categories/getCtegories`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while fetching users :", error);
        }
    };

    ///categories/deletebyid
    const DeleteCategoryById = async (token, id) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.delete(
                `${BACKEND_URL}categories/deletebyid/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while fetching users :", error);
        }
    };


    //edit category = categories/updatebyid
     const EditCategoryById = async (token, id,Name,Description) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.patch(
                `${BACKEND_URL}categories/updatebyid/${id}`,{Name,Description},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while fetching users :", error);
        }
    };
      
    return (
        <AdminContext.Provider
            value={{
                FetchAllUsers,
                FetchAllProviders,
                FetchAllServices,
                FetchBookings,
                AddCategories,
                FetchAllCategories,
                DeleteCategoryById,
                EditCategoryById
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};

export default AdminState;
