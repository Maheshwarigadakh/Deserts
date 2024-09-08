import React from 'react'
import Navbar from './Navbar'
import HomeImg from "./home.png"

function Home() {
  return (<div>
    <Navbar />
      <h1>Home</h1>
      <img src={HomeImg}/>
    </div>
  )
}

export default Home