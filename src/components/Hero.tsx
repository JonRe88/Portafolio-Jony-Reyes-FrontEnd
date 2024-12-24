import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TypewriterText from './TypewriterText';

import { MousePointerClick } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const texts = ["Jony Reyes", "Front End Developer", "Diseñador Frontend"];

export default function Hero() {
  const containerRef = useRef(null);
  const layersRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && layersRef.current) {
      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 },
        { layer: "5", yPercent: 25 },
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: layersRef.current,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      layers.forEach((layerObj, idx) => {
        tl.to(
          `[data-parallax-layer="${layerObj.layer}"]`,
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });

      gsap.to('.scroll-icon', {
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="parallax" id="home">
      <section className="parallax__header relative min-h-screen">
        <div className="parallax__visuals">
          <div ref={layersRef} data-parallax-layers className="parallax__layers">
            
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp"
              loading="eager"
              width="800"
              data-parallax-layer="1"
              alt=""
              className="parallax__layer-img"
            />
            
            
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
              loading="eager"
              width="800"
              data-parallax-layer="2"
              alt=""
              className="parallax__layer-img"
              
            />
            
              <div data-parallax-layer="3" className="parallax__layer-title justify-center text-center">
                <div className="flex flex-col gap-2">
                 <TypewriterText 
                texts={texts}
                className="text-7xl md:text-7xl text-white "
                style={{ textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue" }}
                  />
              </div>
        
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
              loading="eager"
              width="800"
              data-parallax-layer="4"
              alt=""
              className="parallax__layer-img"
            />
   

            </div>

            
          <div className="parallax__fade"> </div>
          </div>
          </div>
        
      </section>
   
    </div>
  );
}