import React from 'react'
import AppBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './content-marketing/HeroSection'
import IntroductionSection from './content-marketing/IntroductionSection'
import FeaturesSection from './content-marketing/FeaturesSection'
import TechnologiesSection from './content-marketing/TechnologiesSection'
import DevelopmentProcessSection from './content-marketing/DevelopmentProcessSection'
import CaseStudiesSection from './content-marketing/CaseStudiesSection'
import CTASection from './content-marketing/CTASection'
import FAQSection from './content-marketing/FAQSection'
import SupportSection from './content-marketing/SupportSection'

function MarketingDigital() {
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
    <SupportSection/>
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default MarketingDigital