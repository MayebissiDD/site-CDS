import React from 'react'
import AppBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from './content-portfolio/HeroSection'
import IntroductionSection from './content-portfolio/IntroductionSection'
import ProjectsShowcaseSection from './content-portfolio/ProjectsShowcaseSection'
import ClientTestimonialsSection from './content-portfolio/ClientTestimonialsSection'
import KeyMetricsSection from './content-portfolio/KeyMetricsSection'
import AwardsRecognitionSection from './content-portfolio/AwardsRecognitionSection'

function Portfolio() {
  return (
    <>
    <AppBar/>
    {/* Content start */}
    <HeroSection/>
    <IntroductionSection/>
    <ProjectsShowcaseSection/>
    {/* <ClientTestimonialsSection/> */}
    <KeyMetricsSection/>
    <AwardsRecognitionSection/>
    {/* Content end */}
    <Footer/>
    </>
  )
}

export default Portfolio