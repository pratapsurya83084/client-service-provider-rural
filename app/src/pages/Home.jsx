import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowWorks";
import ServiceCategories from "../components/ServiceCategory";
import HowToGetStarted from "../components/HowToGetStarted";
import Testimonials from "../components/Testimonials";
import AppDownloadBanner from "../components/AppDownloadBanner";
import Footer from "../components/footer/Footer";
import MobileFooter from "../components/footer/MobileFooter";
import MobileProviderFooter from "../components/footer/MobileProviderFooter";
import { UserContext } from "../UserContext/CreateContext";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [loading, setLoading] = useState(true);
    // const { GetProfile } = useContext(UserContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const User = JSON.parse(localStorage.getItem("userAuth"));

    if (User === undefined) {
        navigate("/login");
        return;
    }

    return (
        <div>
            <NavBar />
            <HeroSection />
            <HowItWorks />
            <ServiceCategories />
            <HowToGetStarted />
            <Testimonials />
            <AppDownloadBanner />
            <Footer />
            {/* farmer Footer */}
            {User?.[0]?.role === "Farmer" && <MobileFooter />}

            {/* provider footer */}
            {User?.[0]?.role === "Provider" && <MobileProviderFooter />}
        </div>
    );
};

export default Home;
