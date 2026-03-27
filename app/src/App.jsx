import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/AdminDashboard/Dashboard";

import BookingServices from "./pages/Users/BookingServices/BookingServices";
import Services from "./pages/Users/Services/Services";

import Profile from "./pages/Users/Profile/Profile";
import FarmerRoute from "./pages/Users/FarmerProtectRoute";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import AdminProtectedRoutes from "./pages/AdminDashboard/AdminProtectedRoutes";
import MyServices from "./pages/Provider/MyServices/MyServices";
import AddServices from "./pages/Provider/AddServices/AddServices";
import Requests from "./pages/Provider/UserRequestForBookings/Requests";
import ProviderProfile from "./pages/Provider/ProviderProfile/ProviderProfile";
import ProviderProtectedRoutes from "./pages/Provider/ProviderProtectedRoutes";
import UserBookings from "./pages/Users/Bookings/UserBookings";
import Bookings from "./pages/Users/BookingServices/BookingServices";
import VerifyOtp from "./pages/VerifyOtp";
import HomeDashboard from "./pages/Users/HomeDashboard";
import HomeProviderDashBoard from "./pages/Provider/HomeProviderDashBoard";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            {/* <Route path="/verify-otp/token=:token/mobileNumber=:mobileNumber"  element={<VerifyOtp />} /> */}

            <Route
                path="/verify-otp/mobileNumber/:mobileNumber"
                element={<VerifyOtp />}
            />

            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            {/* only admin can accessible this route dashboard - yet to be add protect route */}
            <Route
                path="/dashboard"
                element={
                    <AdminProtectedRoutes>
                        {" "}
                        <Dashboard />{" "}
                    </AdminProtectedRoutes>
                }
            />

            {/* mobilefooter  should be show below this route page */}
            {/* user routes */} = 

             <Route
                path="/dashboard-user"
                element={
                    <FarmerRoute>
                        {" "}
                        <HomeDashboard />{" "}
                    </FarmerRoute>
                }
            />
            <Route
                path="/services"
                element={
                    <FarmerRoute>
                        {" "}
                        <Services />{" "}
                    </FarmerRoute>
                }
            />
            <Route
                path="/bookings"
                element={
                    <FarmerRoute>
                        {" "}
                        <UserBookings />{" "}
                    </FarmerRoute>
                }
            />
            <Route
                path="/bookservice/:sid"
                element={
                    <FarmerRoute>
                        {" "}
                        <Bookings />{" "}
                    </FarmerRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <FarmerRoute>
                        <Profile />{" "}
                    </FarmerRoute>
                }
            />

            {/* Only Provider Can Accessible this routes */}
            <Route
                path="/MyServices"
                element={
                    <ProviderProtectedRoutes>
                        {" "}
                        <MyServices />{" "}
                    </ProviderProtectedRoutes>
                }
            />
            
            
              <Route
                path="/dashboard-provider"
                element={
                    <ProviderProtectedRoutes>
                        {" "}
                        <HomeProviderDashBoard />{" "}
                    </ProviderProtectedRoutes>
                }
            />
            <Route
                path="/AddServiceByProvider"
                element={
                    <ProviderProtectedRoutes>
                        {" "}
                        <AddServices />{" "}
                    </ProviderProtectedRoutes>
                }
            />
            <Route
                path="/UserRequesToProviderForbooking"
                element={
                    <ProviderProtectedRoutes>
                        {" "}
                        <Requests />{" "}
                    </ProviderProtectedRoutes>
                }
            />
            <Route
                path="/ProviderProfile"
                element={
                    <ProviderProtectedRoutes>
                        {" "}
                        <ProviderProfile />{" "}
                    </ProviderProtectedRoutes>
                }
            />
        </Routes>
    );
};

export default App;
