import { BACKEND_URL } from "../lib/ApiConnection";
import { UserContext } from "./CreateContext";

import React, { useEffect } from "react";
import axios from "axios";

const StateUserContext = ({ children }) => {
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

    const signUp = async (MobileNumber, Password, Username, Role, email) => {
        try {
            const res = await axios.post(
                `${BACKEND_URL}users/signup`,
                { MobileNumber, Password, Username, Role, email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            return res.data;
        } catch (error) {
            console.log("error while register user :", error);
        }
    };

    const Login = async (MobileNumber, Password) => {
        try {
            const res = await axios.post(
                `${BACKEND_URL}users/login`,
                { MobileNumber, Password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                },
            );
            return res.data;
        } catch (error) {
            console.log("error while login user :", error);
        }
    };

    // http://localhost:5259/api/users/get-profile

    const GetProfile = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(`${BACKEND_URL}users/get-profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });

            return res.data;
        } catch (error) {
            console.log("error while get profile user :", error);
        }
    };

    //-------------------------farmer api's function call belows start----------------------------------------------------
    //booking/farmer-bookings
    const getFarmerSpecificBookingServices = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(
                `${BACKEND_URL}booking/farmer-bookings`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while Fetch farmer Bookings :", error);
        }
    };

    // getAllservices - service-provider/getAllServices
    const GetAllServices = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(
                `${BACKEND_URL}service-provider/getAllServices`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while Fetch farmer Bookings :", error);
        }
    };

    //provider specific fetch service - service-provider/get-provider-specific-service
    const GetProviderSpecificServices = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(
                `${BACKEND_URL}service-provider/get-provider-specific-service`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while Fetch provider service :", error);
        }
    };

    //add service - only provider can add service - service-provider/add
    const AddService = async (
        token,
        title,
        category,
        price,
        district,
        description,
    ) => {
        try {
            const res = await axios.post(
                `${BACKEND_URL}service-provider/add`,
                { title, category, price, district, description },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":`Bearer ${token}`
                    },
                    withCredentials:true
                },
            );
            return res.data;
        } catch (error) {
            console.log("error while adding service :", error);
        }
    };

    return (
        <UserContext.Provider
            value={{
                signUp,
                Login,
                GetProfile,
                getFarmerSpecificBookingServices,
                GetAllServices,
                GetProviderSpecificServices,
                AddService
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default StateUserContext;
