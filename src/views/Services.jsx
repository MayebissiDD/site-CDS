import React from 'react'
import AppBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from './content-services/HeroSection'
import ServicesMainSection from './content-services/ServicesMainSection'
import CaseStudiesSection from './content-services/CaseStudiesSection'
import ProcessSection from './content-services/ProcessSection'
import WhyChooseUsSection from './content-services/WhyChooseUsSection'
import TestimonialsSection from './content-services/TestimonialsSection'
import FAQSection from './content-services/FAQSection'
import CTASection from './content-services/CTASection'
import QuickContactSection from './content-services/QuickContactSection'

function Services() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <ServicesMainSection/>
    <CaseStudiesSection/>
    <ProcessSection/>
    {/* <WhyChooseUsSection/>
    <TestimonialsSection/> */}
    <CTASection/>
    <FAQSection/>
    {/* <QuickContactSection/> */}
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default Services