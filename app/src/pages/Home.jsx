import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowWorks'
import ServiceCategories from '../components/ServiceCategory'
import HowToGetStarted from '../components/HowToGetStarted'
import Testimonials from '../components/Testimonials'
import AppDownloadBanner from '../components/AppDownloadBanner'
import Footer from '../components/footer/Footer'
import MobileFooter from '../components/footer/MobileFooter';

const Home = () => {
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
      <MobileFooter/>
    </div>
  )
}

export default Home
