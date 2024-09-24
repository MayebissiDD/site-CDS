import React from 'react'
import AppBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from './content-about/HeroSection'
import IntroductionSection from './content-about/IntroductionSection'
import PresidentMessage from './content-about/PresidentMessage'
import DirectorMessage from './content-about/DirectorMessage'
import ValuesSection from './content-about/ValuesSection'
import TeamSection from './content-about/TeamSection'
import HistorySection from './content-about/HistorySection'
import PartnersSection from './content-about/PartnersSection'
import TestimonialsSection from './content-about/TestimonialsSection'

function About() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <HistorySection/>
    <IntroductionSection/>
    <PresidentMessage/>
    <DirectorMessage/>
    {/* <ValuesSection/> */}
    <TeamSection/>
    <PartnersSection/>
    {/* <TestimonialsSection/> */}
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default About