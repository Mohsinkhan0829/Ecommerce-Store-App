import React from 'react'
import BlogBannerImg from "../../assets/img/banner/b19.jpg"
const BlogBanner = () => {

    const Banner = {
        backgroundImage : `URL(${BlogBannerImg})`
    }
  return (
    <section id="shop-header" class="blog-header" style={Banner} >

        <h2>#ReadMore</h2>

        <p>Read all case study about our products</p>

    </section>
  )
}

export default BlogBanner;
