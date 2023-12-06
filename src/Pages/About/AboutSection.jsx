import React from 'react'
import { WhoWeAre } from '../../assets/img/img'

const AboutSection = () => {
  return (
    <section id="about-head" class="section-p1">
        <img src={WhoWeAre} />
        <div className='about'>
            <h2>Who we are?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore nemo eius ratione distinctio
                cumque alias repudiandae tenetur consectetur consequatur voluptas blanditiis natus vero praesentium in
                nam esse,</p><br/>

            <abbr title=""> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cum quibusdam! Rerum
                facilis.</abbr>
            <br/><br/>
            <marquee backgroundcolor="#ccc" loop="-1" scrollamount="5" width="100%">Ecommerce Store Project by using ReactJs by Mohsin khan</marquee>
        </div>


    </section>
  )
}

export default AboutSection
