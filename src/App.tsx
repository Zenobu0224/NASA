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
      end: "95.65%",
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
  }, '<')
  .from('#p2-text', {
    opacity: 0
  })
  .from('#p2-book-svg', {
    opacity: 0
  }, '<')
  .from('#p2-tv-svg', {
    opacity: 0
  }, '<')
  .to('#p2-book-svg', {
    opacity: 0
  })
  .to('#p2-tv-svg', {
    scale: 1.3,
    x: -100
  }, '<')
  .to('#p2-tv-svg', {
    opacity: 0
  })
  .to('#p2-text', {
    opacity: 0
  }, '<')
  .from('#p4-sun-svg', {
    opacity: 0
  })
  .from('#p4-text', {
    opacity: 0
  }, '<')
  .from('#p4-earth-svg', {
    opacity: 0
  }, '<')
  .to('#p4-text', {
    opacity: 0
  })
  .to('#p4-earth-svg', {
    opacity: 0
  })
  .to('#p4-sun-svg', {
    scale: 1.2,
    x: 200
  }, '<')
  .from('#p5-text', {
    opacity: 0
  }, '<')
  .to('#p5-text', {
    opacity: 0
  })
  .from('#p6-text', {
    opacity: 0
  })
  .to('#p4-sun-svg', {
    opacity: 0
  })
  .to('#p4-earth-svg', {
    opacity: 1,
    scale: 1.2,
    x: -200
  }, '<')
  .to('#p6-text', {
    opacity: 0
  })
  .to('#p4-earth-svg', {
    opacity: 0
  }, '<')
  .from('#p7-text', {
    opacity: 0
  })
  .from('#p7-tv-svg', {
    opacity: 0
  }, '<')
  .to('#p7-tv-svg', {
    opacity: 0
  })
  .to('#p7-text', {
    opacity: 0
  }, '<')
  .from('#p8-luggage-svg', {
    opacity: 0
  })
  .from('#p8-hand-svg', {
    x:-100,
    y:-100,
    opacity: 0
  }, '<')
  .from('#p8-text', {
    opacity: 0
  }, '<')
  .to('#p8-luggage-svg', {
    opacity: 0
  })
  .to('#p8-hand-svg', {
    opacity: 0
  }, '<')
  .from('#p8-plane-svg', {
    opacity: 0
  }, '<')
  .from('#p8-cloud1-svg', {
    opacity: 0
  }, '<')
  .from('#p8-cloud2-svg', {
    opacity: 0
  }, '<')
  .to('#p8-cloud1-svg', {
    x: -100,
    opacity: 0
  })
  .to('#p8-cloud2-svg', {
    x: -300,
    opacity: 0
  }, '<')
  .to('#p8-text', {
    opacity: 0
  })
  .from('#p9-text', {
    opacity: 0
  })
  .to('#p8-plane-svg', {
    scale: 0.8,
    y: 50
  }, '<')
  .from('#p9-signal1-svg', {
    opacity: 0
  })
  .to('#p9-signal1-svg', {
    opacity: 0
  })
  .from('#p9-signal2-svg', {
    opacity: 0
  }, '<')
  .to('#p8-plane-svg', {
    opacity: 0
  })
  .to('#p9-signal2-svg', {
    opacity: 0
  }, '<')
  .from('#p9-alley-svg', {
    opacity: 0
  }, '<')
  .to('#p9-alley-svg', {
    opacity: 0
  })
  .to('#p9-text', {
    opacity: 0
  }, '<')
  .from('#p10-text', {
    opacity: 0
  })
  .from('#p10-light-svg', {
    opacity: 0
  }, '<')
  .to('#p10-light-svg', {
    opacity: 0
  })
  .to('#p10-no-light-svg', {
    opacity: 1
  }, '<')
  .to('#p10-no-light-svg', {
    opacity: 0
  })
  .to('#p10-text', {
    opacity: 0
  }, '<')
  .from('#p11-text', {
    opacity: 0
  })
  .from('#p11-cloud1-svg', {
    opacity: 0
  }, '<')
  .from('#p11-cloud2-svg', {
    opacity: 0
  }, '<')
  .to('#p11-cloud1-svg', {
    x: -350
  })
  .to('#p11-cloud2-svg', {
    x: 350,
  }, '<')
  .from('#p11-aurora-svg', {
    opacity: 0
  })
  .to('#p11-aurora-svg', {
    opacity: 0
  })
  .to('#p11-cloud1-svg', {
    opacity: 0
  })
  .to('#p11-cloud2-svg', {
    opacity: 0
  }, '<')
  .to('#p11-text', {
    opacity: 0
  }, '<')
  .from('#p12-camera-svg', {
    opacity: 0,
    y: 100
  })
  .from('#p12-text', {
    opacity: 0,
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

        <img id="p2-book-svg" src="src/assets/p2/book.svg"></img>
        <img id="p2-tv-svg" src="src/assets/p2/tv.svg"></img>

        <img id="p4-sun-svg" src="src/assets/p4/sun.svg"></img>
        <img id="p4-earth-svg" src="src/assets/p4/earth.svg"></img>

        <img id="p7-tv-svg" src="src/assets/p7/tv.svg"></img>

        <img id="p8-luggage-svg" src="src/assets/p8/luggage.svg"></img>
        <img id="p8-hand-svg" src="src/assets/p8/hand.svg"></img>
        <img id="p8-plane-svg" src="src/assets/p8/plane.svg"></img>
        <img id="p8-cloud1-svg" src="src/assets/p8/cloud1.svg"></img>
        <img id="p8-cloud2-svg" src="src/assets/p8/cloud2.svg"></img>

        <img id="p9-signal1-svg" src="src/assets/p9/signal1.svg"></img>
        <img id="p9-signal2-svg" src="src/assets/p9/signal2.svg"></img>
        <img id="p9-alley-svg" src="src/assets/p9/alley.svg"></img>

        <img id="p10-light-svg" src="src/assets/p10/light.svg"></img>
        <img id="p10-no-light-svg" src="src/assets/p10/no-light.svg"></img>

        <img id="p11-cloud1-svg" src="src/assets/p11/cloud.svg"></img>
        <img id="p11-cloud2-svg" src="src/assets/p11/cloud.svg"></img>
        <img id="p11-aurora-svg" src="src/assets/p11/aurora.svg"></img>

        <img id="p12-camera-svg" src="src/assets/p12/camera.svg"></img>
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
        <p id="p4-text">Sometimes, the Sun sends out bursts of energy called solar flares or clouds of particles known as coronal mass ejections (CMEs).
        These explosions are part of solar storms. When these storms reach Earth, they can disturb our planet’s magnetic field, causing radio blackouts, 
        power outages, and most wonderfully, auroras.
        </p>
        <p id="p5-text">
        Solar storms begin deep within the Sun, where magnetic fields twist and tangle like messy strands of hair. As the Sun spins, its middle turns faster than its poles, pulling and stretching those magnetic lines.
        Sometimes they twist so tightly that they snap and reconnect, an event called magnetic reconnection, and when they do, they release huge amounts of energy into space.
        And so, a solar storm is born, racing toward Earth.
        </p>
        <p id="p6-text">
        When the charged particles from the Sun reach our planet, Earth’s invisible magnetic shield guides them toward the poles.
        There, high in the atmosphere, they collide with gases, and the sky begins to paint itself.
        Green, purple, and pink light swirl and ripple like waves on an invisible sea.
        </p>
        <p id="p7-text">
        But auroras don’t appear every night.
        Each morning, I checked the aurora forecast, watching and hoping.
        One day, the news I’d been waiting for appeared — a strong aurora was coming to the Northern Hemisphere. My heart soared. It was time.
        </p>
        <p id="p8-text">
        I packed my camera with trembling hands and boarded a plane that would carry me closer to the dancing sky.
        Through the window, the clouds drifted like soft waves. I imagined the auroras waiting beyond the horizon, ready to perform their cosmic ballet.
        </p>
        <p id='p9-text'>
        Then something unusual happened. The radio signal in the cockpit faded and crackled.
        The pilot calmly explained that a solar storm was interfering with communication. Space weather was making its presence known;
        It felt like the Sun was whispering to us: 'I am part of your journey too.'
        </p>
        <p id='p10-text'>
        When we landed, the town below was quiet and dark. A power outage had swept across the area.
        People explained that a solar flare had disturbed the power grid, leaving the streets without electricity.
        I realized then that space weather doesn’t just paint the sky, it shapes life on Earth.
        </p>
        <p id='p11-text'>
        As darkness deepened, the clouds drifted away, and the stars came out to watch.
        And then it happened.
        From the edge of the world, ribbons of light unfurled — glowing green, violet, and rose, weaving and swaying in the silent night.
        </p>
        <p id='p12-text'>
        I lifted my camera, my heart beating fast, and clicked — once, twice, again and again.
        Each photograph captured a story of sunlight turned into color, of science transformed into wonder.
        My dream had finally come true.
        </p>
      </div>

    </>
  )
}

export default App
