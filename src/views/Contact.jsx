import React from 'react'
import AppBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from './content-contact/HeroSection'
import InformationSection from './content-contact/InformationSection'
import MediaLinksSection from './content-contact/MediaLinksSection'
import FaqSection from './content-contact/FaqSection'
import MapSection from './content-contact/MapSection'
import CTASection from './content-contact/CTASection'
import FormSection from './content-contact/FormSection'

function Contact() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <InformationSection/>
    <MapSection/>
    <FormSection/>
    <MediaLinksSection/>
    {/* <FaqSection/> */}
    {/* <CTASection/> */}
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default Contact