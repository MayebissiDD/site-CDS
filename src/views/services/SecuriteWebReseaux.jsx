import React from 'react'
import AppBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './content-securite/HeroSection'
import IntroductionSection from './content-securite/IntroductionSection'
import FeaturesSection from './content-securite/FeaturesSection'
import TechnologiesSection from './content-securite/TechnologiesSection'
import DevelopmentProcessSection from './content-securite/DevelopmentProcessSection'
import CaseStudiesSection from './content-securite/CaseStudiesSection'
import CTASection from './content-securite/CTASection'
import FAQSection from './content-securite/FAQSection'
import SupportSection from './content-securite/SupportSection'

function SecuriteWebReseaux() {
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
    <SupportSection/>
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default SecuriteWebReseaux