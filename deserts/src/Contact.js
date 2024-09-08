import React from 'react'
import Navbar from './Navbar'
import ContactImg from "./Contact.png"

function Contact() {
  return (
    <div>
      <Navbar/>
      <h1>Contact</h1>
      <img src={ContactImg}/>
      </div>
  )
}

export default Contact