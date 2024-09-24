import React from 'react'
import AppBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './content-infrastructure/HeroSection'
import IntroductionSection from './content-infrastructure/IntroductionSection'
import FeaturesSection from './content-infrastructure/FeaturesSection'
import TechnologiesSection from './content-infrastructure/TechnologiesSection'
import DevelopmentProcessSection from './content-infrastructure/DevelopmentProcessSection'
import CaseStudiesSection from './content-infrastructure/CaseStudiesSection'
import CTASection from './content-infrastructure/CTASection'
import FAQSection from './content-infrastructure/FAQSection'
import SupportSection from './content-infrastructure/SupportSection'

function Infrastructures() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <IntroductionSection/>
    <FeaturesSection/>
    <TechnologiesSection/>
    <DevelopmentProcessSection/>
    {/* <CaseStudiesSection/> */}
    <CTASection/>
    <FAQSection/>
    {/* <SupportSection/> */}
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default Infrastructures