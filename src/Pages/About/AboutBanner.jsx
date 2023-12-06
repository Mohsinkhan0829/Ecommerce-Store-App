import React from 'react'
import AboutBg from "../../assets/img/about/about-banner.png"
const AboutBanner = () => {
    const AboutHeaderBg = {
        backgroundImage : `URL(${AboutBg})`
    }
  return (
    <section id="shop-header" class="about-header" style={AboutHeaderBg}>

        <h2>#Know-us</h2>

        <p>Best shopping site ever</p>

    </section>

  )
}

export default AboutBanner
