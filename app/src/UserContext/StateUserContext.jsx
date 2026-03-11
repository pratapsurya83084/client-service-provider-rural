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
            console.log("error while register user :", error);
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
            console.log("error while register user :", error);
        }
    };

    return (
        <UserContext.Provider
            value={{
                signUp,
                Login,
                GetProfile,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default StateUserContext;
