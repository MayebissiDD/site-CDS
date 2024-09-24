import React from 'react'
import AppBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './content-archivage-numerique/HeroSection'
import IntroductionSection from './content-archivage-numerique/IntroductionSection'
import FeaturesSection from './content-archivage-numerique/FeaturesSection'
import TechnologiesSection from './content-archivage-numerique/TechnologiesSection'
import DevelopmentProcessSection from './content-archivage-numerique/DevelopmentProcessSection'
import CaseStudiesSection from './content-archivage-numerique/CaseStudiesSection'
import CTASection from './content-archivage-numerique/CTASection'
import FAQSection from './content-archivage-numerique/FAQSection'
import SupportSection from './content-archivage-numerique/SupportSection'

function ArchivagesNumerique() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <IntroductionSection/>
    <FeaturesSection/>
    {/* <TechnologiesSection/> */}
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

export default ArchivagesNumerique