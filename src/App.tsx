import { useState } from 'react'
import { ReactLenis } from 'lenis/react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './App.css'

function fullAnimationTimeline(){
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top',
      end: "+=100%",
      scrub: true,
      markers: true,
      invalidateOnRefresh: true
    }
  })

  tl.to('#sun-svg',{
    rotateZ: '90deg'
  })
  .to('#text-container', {
    opacity: '0'
  },
  '<')
  .from('#p1-lira-hand-cam-svg', {
    opacity: 0,
    rotateZ: '90deg',
    transformOrigin: 'left 80%'
  },
  '<')
}

function initLenisSmoothScroll(){
  const lenis = new Lenis();
  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });
  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);
}


function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  initLenisSmoothScroll();  //integrates with gsap

  useGSAP(fullAnimationTimeline)
  

  return (
    <>
      <ReactLenis root />
      <div id="animation-container">
        <img id="sun-svg" src="src/assets/sun.svg"></img>
        <img id="p1-lira-svg" src='src/assets/p1/lira.svg'></img>
        <img id="p1-lira-hand-cam-svg" src="src/assets/p1/lira-hand-cam.svg"></img>
      </div>
      <div id="text-container">
        <p>miaw miaw miaw miaw</p>
        <p>ambussing</p>
      </div>
    </>
  )
}

export default App
