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

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />

            {/* mobilefooter  should be show below this route page */}
            {/* user routes */}
            <Route path="/services" element={<FarmerRoute> <Services /> </FarmerRoute>} />
            <Route path="/bookings" element={ <FarmerRoute> <BookingServices /> </FarmerRoute> } />
            <Route path="/profile" element={ <FarmerRoute><Profile /> </FarmerRoute> } />

            {/* only admin can accessible this route dashboard - yet to be add protect route */}
            <Route path="/dashboard" element={<AdminProtectedRoutes> <Dashboard />  </AdminProtectedRoutes>} />
        </Routes>
    );
};

export default App;
