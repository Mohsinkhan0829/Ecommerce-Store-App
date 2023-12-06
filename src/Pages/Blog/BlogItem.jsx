import React from 'react'

const BlogItem = (props) => {
  return (
    <div class="blog-box">
    <div class="blog-img">
        <img src={props.image}/>
    </div>
    <div class="blog-details">
        <h4>{props.heading}</h4>
        <p>{props.description}</p>
        <br/>
         <a href="#">{props.More}</a>
    </div>
    <h1>{props.date}</h1>
</div>
  )
}

export default BlogItem;
