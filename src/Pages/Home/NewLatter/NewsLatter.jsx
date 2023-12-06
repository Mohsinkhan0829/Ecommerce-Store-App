import React from 'react'
import { NewsLatter } from '../../../assets/img/img'

const NewsLattersection = () => {
    const NewsLatterbg = {
        backgroundImage : `(${NewsLatter})`
    }
  return (
    <section id="news-latter" class="section-p1" style={NewsLatterbg}>
    <div class="news-tag">
        <h4>Sign up for Newslatters</h4>
        <p>Get E-Mail Updates about our latest shop and<span> special offer </span> </p>
    </div>
    <div class="form">
        <input type="text" placeholder="your email address" />
        <button>Sign Up</button>
    </div>
</section>
  )
}

export default NewsLattersection;
