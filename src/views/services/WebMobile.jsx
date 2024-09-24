import React from 'react'
import AppBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './content-web-mobile/HeroSection'
import IntroductionSection from './content-web-mobile/IntroductionSection'
import FeaturesSection from './content-web-mobile/FeaturesSection'
import TechnologiesSection from './content-web-mobile/TechnologiesSection'
import DevelopmentProcessSection from './content-web-mobile/DevelopmentProcessSection'
import CaseStudiesSection from './content-web-mobile/CaseStudiesSection'
import CTASection from './content-web-mobile/CTASection'
import FAQSection from './content-web-mobile/FAQSection'
import SupportSection from './content-web-mobile/SupportSection'

function WebMobile() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <IntroductionSection/>
    <FeaturesSection/>
    <TechnologiesSection/>
    <DevelopmentProcessSection/>
    <CaseStudiesSection/>
    <CTASection/>
    <FAQSection/>
    {/* <SupportSection/> */}
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default WebMobile