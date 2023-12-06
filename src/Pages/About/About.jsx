import React from 'react'
import FooterSection from '../Home/Footer/FooterSection';
import NewsLattersection from '../Home/NewLatter/NewsLatter';
import AboutBanner from './AboutBanner';
import AboutSection from './AboutSection';
import AboutSectionVedio from './AboutSectionVedio';
import Features from '../Home/features/Features';

const About = () => {
  return (
    <>
    <AboutBanner/>
    <AboutSection/>
    <AboutSectionVedio/>
    <Features />
    <NewsLattersection />
    <FooterSection/>

    </>
  )
}

export default About;