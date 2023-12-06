import React from 'react'

const ContactForm = () => {
  return (
    <section id="form-details">
    <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your E-mail" />
        <input type="text" placeholder="Your subject"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <button>submit</button>
    </form>
   
</section>

  )
}

export default ContactForm;
