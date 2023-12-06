import React from 'react'
import AboutVedio from "../../assets/img/about/1.mp4"
const AboutSectionVedio = () => {
  return (
    <section id="about-app" class="section-p1">
        <h1>
            Download our<a href="#"> App</a>
        </h1>
        <div class="video">
            <video autoPlay loop src={AboutVedio}></video>
        </div>
    </section>
  )
}

export default AboutSectionVedio;
