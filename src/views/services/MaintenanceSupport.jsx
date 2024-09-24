import React from 'react'
import AppBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './content-maintenance/HeroSection'
import IntroductionSection from './content-maintenance/IntroductionSection'
import FeaturesSection from './content-maintenance/FeaturesSection'
import TechnologiesSection from './content-maintenance/TechnologiesSection'
import DevelopmentProcessSection from './content-maintenance/DevelopmentProcessSection'
import CaseStudiesSection from './content-maintenance/CaseStudiesSection'
import CTASection from './content-maintenance/CTASection'
import FAQSection from './content-maintenance/FAQSection'
import SupportSection from './content-maintenance/SupportSection'

function MaintenanceSupport() {
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

export default MaintenanceSupport