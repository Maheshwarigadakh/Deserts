import React from 'react'
import "./home.css"
import Navbar from '../../components/Navbar/Navbar'
import HomeImg from "./home.png"
import Footer from "./../../components/Footer/Footer"


function Home() {
  return (<div>
    <Navbar />
      <h1>Home</h1>
      <img src={HomeImg} className='header-img'/>
      <Footer/>
    </div>
  )
}

export default Home