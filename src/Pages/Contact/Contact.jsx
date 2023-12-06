import React from 'react'
import FooterSection from '../Home/Footer/FooterSection';
import NewsLattersection from '../Home/NewLatter/NewsLatter';
import ContactBanner from './ContactBanner';
import LocationSection from './LocationSection';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div>
      <ContactBanner/>
      <LocationSection/>
      <ContactForm/>
      <NewsLattersection />
      <FooterSection/>
    </div>
  )
}

export default Contact;