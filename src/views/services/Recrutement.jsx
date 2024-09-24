import React from 'react'
import AppBar from '../../components/Navbar'
import Footer from '../../components/Footer';
import HeroSection from './content-recrutement/HeroSection'
import IntroductionSection from './content-recrutement/IntroductionSection'
import FeaturesSection from './content-recrutement/FeaturesSection'
import DevelopmentProcessSection from './content-recrutement/DevelopmentProcessSection'
import CTASection from './content-recrutement/CTASection'
import FAQSection from './content-recrutement/FAQSection'
import SupportSection from './content-recrutement/SupportSection'

function Recrutement() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <IntroductionSection/>
    <FeaturesSection/>
    <DevelopmentProcessSection/>
    <CTASection/>
    <SupportSection/>
    <FAQSection/>
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default Recrutement