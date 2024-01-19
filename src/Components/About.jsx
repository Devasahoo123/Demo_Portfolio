import React from 'react'
import HomeAbout from './HomeAbout'
import web from '../images/about.jpeg';

function About() {
  return (
    <>
      <HomeAbout 
        name = " Welcome to About Page" 
        imgsrc={web} visit='/contact' 
        btname="Contact Now" 
      />
    </>
  )
}

export default About
