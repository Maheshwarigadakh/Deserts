import React from 'react'
import "./contact.css"
import Navbar from '../../components/Navbar/Navbar'
import ContactImg from "./Contact.png"
import Footer from "./../../components/Footer/Footer"


function Contact() {
  return (
    <div>
      <Navbar/>
      <h1>Contact</h1>
      <img src={ContactImg} className='header-img'/>
      <Footer/>
      </div>
  )
}

export default Contact