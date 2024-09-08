import React from 'react'
import "./about.css"
import Navbar from '../../components/Navbar/Navbar'
import AboutImg from "./About.png"
import Footer from "./../../components/Footer/Footer"

function About() {
  return (
    <div>
      <Navbar/>
      <h1>About</h1>
      <img src={AboutImg} className='header-img'/>
      <Footer />
      </div>
  )
}

export default About