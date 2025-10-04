import { useState } from 'react'
import { ReactLenis } from 'lenis/react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './App.css'

function fullAnimationTimeline(){
  gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top',
      end: "80%",
      scrub: true,
      markers: true,
      invalidateOnRefresh: true
    }
  })
  .to('#landing-h1', {
    opacity: 0
  })
  .to('#p1-lira-svg', {
    bottom: 0,
    left: '40%'
  },'<')
  .to('#p1-text', {
    opacity: 1
  })
  .to('#p1-lira-cam-svg', {
    opacity: 1
  },'<')
  .from('#p1-sun-svg', {
    opacity: 0,
    y: 100
  })
  .from('#p1-rain-svg', {
    opacity: 0,
    y: 100
  })
  .to('#p1-sun-svg', {
    opacity: 0,
    y: -100
  }, '<')
  .to('#p1-rain-svg', {
    opacity: 0,
    y: -100
  })
  .from('#p1-stars-svg', {
    opacity: 0,
    y: 100
  }, '<')
  .to('#p1-text', {
    opacity: 0
  })
  .to('#p1-lira-svg', {
    opacity: 0
  }, '<')
  .to('#p1-lira-cam-svg', {
    opacity: 0
  }, '<')
  .to('#p1-stars-svg', {
    opacity: 0
  })
  .from('#p2-text', {
    opacity: 0
  }, '<')
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
        <img id="p1-lira-svg" src='src/assets/p1/lira.svg'></img>
        <img id="p1-lira-cam-svg" src="src/assets/p1/lira-cam.svg"></img>
        <img id="p1-sun-svg" src="src/assets/p1/sun.svg"></img>
        <img id="p1-rain-svg" src="src/assets/p1/rain.svg"></img>
        <img id="p1-stars-svg" src="src/assets/p1/stars.svg"></img>

      </div>

      <div id="text-container">
        <h1 id="landing-h1">Hi, I'm Lira, a Photographer</h1>
        <p id='p1-text'>I chase beauty everywhere — in glowing sunsets, in tiny drops of rain, and in the twinkling stars above.
        But there is one dream I hold close to my heart — to capture the aurora, the magical ribbons of light that dance and swirl across the dark sky.
        </p>
        <p id="p2-text">I always wondered how such a breathtaking sight is born. So I opened books, watched videos, and read stories.
        I learned that the aurora is a gift from the Sun — a part of something called space weather.
        Even though the Sun is nearly 100 million miles away, it still touches our daily lives.
        </p>
      </div>

    </>
  )
}

export default App
