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

    //-------farmer api's function call belows start------------
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
        if (ClearLocalauth()) return;
        try {
            const res = await axios.post(
                `${BACKEND_URL}service-provider/add`,
                { title, category, price, district, description },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );
            return res.data;
        } catch (error) {
            console.log("error while adding service :", error);
        }
    };

    //fetch singlepage bookings
    const fetchSinglePageBookingServices = async (token, id) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(
                `${BACKEND_URL}service-provider/get-single-service/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while Fetch single service :", error);
        }
    };

    //User Booking service
    const BookingServices = async (token, serviceId, date, address, notes) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.post(
                `${BACKEND_URL}booking/add-booking`,
                { serviceId: serviceId, bookingDate: date, address, notes },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while booking services :", error);
            return;
        }
    };

    //get user requested to provider only those request show provider to confirm specific user and service
    //booking/get-user-requested-services-for-provider-Specific
    const getProviderRequestSendedByCustomerforBooking = async (token) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.get(
                `${BACKEND_URL}booking/get-user-requested-services-for-provider-Specific`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );
            return res.data;
        } catch (error) {
            console.log(
                "error while retriving requested user for confirmation :",
                error,
            );
            return;
        }
    };

    // updateBookingStatus -  chnage status of that bookingId
    const updateBookingStatus = async (token, status, bookingid) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.patch(
                `${BACKEND_URL}booking/updatebookingStatusbyid/${bookingid}?status=${status}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while change status of Updating :", error);
            return;
        }
    };

    const VerifyOtp = async (phoneNumber) => {
        if (ClearLocalauth()) return;
        try {
            const res = await axios.post(
                `${BACKEND_URL}users/verify-otp`,
                { mobileNumber: phoneNumber },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            return res.data;
        } catch (error) {
            console.log("error while verifying Otp:", error);
            return;
        }
    };

    //PaymentCompleteStatusUpdate

  const PaymentCompleteStatusUpdate = async (token, bookingId, paymentId) => {
    if (ClearLocalauth()) return;

    try {
        const res = await axios.post(
            `${BACKEND_URL}booking/payment-complete`,
            {
                bookingId: bookingId,
                razorpayPaymentId: paymentId
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true
            }
        );

        return res.data;
    } catch (error) {
        console.log("error while updating payment:", error);
        return;
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
                AddService,
                fetchSinglePageBookingServices,
                BookingServices,
                getProviderRequestSendedByCustomerforBooking,
                updateBookingStatus,
                VerifyOtp,
                PaymentCompleteStatusUpdate
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default StateUserContext;
