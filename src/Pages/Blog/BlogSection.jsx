import React from 'react'
import BlogItem from './BlogItem'
import BlogData from './BlogData'

const BlogSection = () => {
  return (
    <section id="blog">
        {
            BlogData.map((item)=>{
                return <BlogItem key={item}
                image={item.image}
                heading={item.heading}
                description={item.description}
                More={item.More}
                date={item.date}
                />
            })
        }
    </section>
  )
}

export default BlogSection;
