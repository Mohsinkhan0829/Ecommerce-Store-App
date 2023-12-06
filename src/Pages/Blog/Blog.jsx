import React from 'react'
import NewsLattersection from '../Home/NewLatter/NewsLatter';
import FooterSection from '../Home/Footer/FooterSection';
import BlogBanner from './BlogBanner';
import BlogSection from './BlogSection';

const Blog = () => {
  return (
    <div>
      <BlogBanner/>
      <BlogSection />
          <NewsLattersection />
      <FooterSection/>
    </div>
  )
}

export default Blog;