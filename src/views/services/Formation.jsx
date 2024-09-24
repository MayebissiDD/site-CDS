import React from 'react'
import AppBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './content-formation/HeroSection'
import IntroductionSection from './content-formation/IntroductionSection'
import FeaturesSection from './content-formation/FeaturesSection'
import TrainingSliderSection from './content-formation/TrainingSliderSection'
import CTASection from './content-formation/CTASection'
import FAQSection from './content-formation/FAQSection'
import SupportSection from './content-formation/SupportSection'


function Formation() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <IntroductionSection/>
    <TrainingSliderSection/>
    <FeaturesSection/>
    <CTASection/>
    <FAQSection/>
    {/* <SupportSection/> */}
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default Formation