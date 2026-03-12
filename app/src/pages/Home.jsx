import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowWorks'
import ServiceCategories from '../components/ServiceCategory'
import HowToGetStarted from '../components/HowToGetStarted'
import Testimonials from '../components/Testimonials'
import AppDownloadBanner from '../components/AppDownloadBanner'
import Footer from '../components/footer/Footer'
import MobileFooter from '../components/footer/MobileFooter';
import MobileProviderFooter from '../components/footer/MobileProviderFooter';
import { UserContext } from '../UserContext/CreateContext'
import { Toaster,toast } from 'react-hot-toast'


const Home = () => {
  
  const [loading, setLoading] = useState(true);
    const { GetProfile } = useContext(UserContext);
  // const token = Cookies.get("token");
    async function getUserProfile() {
        const token = localStorage.getItem("token");

        if (!token) {
            return;
        }

        try {
         const res = await GetProfile(token);
         localStorage.setItem("userAuth", JSON.stringify(res));
           setLoading(false);
            
        } catch (error) {
            console.log("error while fetching profile :", error);
        }
    }

    useEffect(() => {
        getUserProfile();
    }, []);


// get UserAuth
  const User =  JSON.parse(localStorage.getItem("userAuth"));
  // console.log("profile :",User);

  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <HowItWorks/>
      <ServiceCategories/>
      <HowToGetStarted/>
      <Testimonials/>
      <AppDownloadBanner/>
      <Footer/>
      {/* farmer Footer */}
  {!loading && User?.[0]?.role === "Farmer" && <MobileFooter />}
  
  {/* provider footer */}
{!loading && User?.[0]?.role === "Provider" && <MobileProviderFooter />}

    </div>
 );
}

export default Home
