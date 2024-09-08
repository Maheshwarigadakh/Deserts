import React from 'react'
import Navbar from './Navbar'
import AboutImg from "./About.png"

function About() {
  return (
    <div>
      <Navbar/>
      <h1>About</h1>
      <img src={AboutImg}/>
      </div>
  )
}

export default About