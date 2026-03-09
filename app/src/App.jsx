import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/AdminDashboard/Dashboard";

import BookingServices from "./pages/Users/BookingServices/BookingServices";
import Services from "./pages/Users/Services/Services";

import Profile from "./pages/Users/Profile/Profile";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />

            {/* mobilefooter  should be show below this route page */}
            {/* user routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/bookings" element={<BookingServices />} />
            <Route path="/profile" element={<Profile />} />

            {/* only admin can accessible this route dashboard - yet to be add protect route */}

            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default App;
