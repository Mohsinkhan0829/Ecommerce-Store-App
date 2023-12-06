import React from 'react'
import ContactBg from "../../assets/img/banner/b18.jpg"

const ContactBanner = () => {
    const ContactbgImage = {
        backgroundImage : `URL(${ContactBg})`
    }
  return (
    <section id="shop-header" class="about-header" style={ContactbgImage}>
        <h2>#Lest-talk</h2>
        <p>LEAVE A MESSAGE.we love to hear you</p>
    </section>
  )
}

export default ContactBanner;
