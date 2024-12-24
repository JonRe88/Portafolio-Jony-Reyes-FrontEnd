import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "FreeCodeCamp   ",
    description: "Diseño web Responsivo.",
    image: "images/freecodecamp.org_certification_JonyR_responsive-web-design.jpg"
  },
  {
    id: 2,
    title: "Microsoft Learn",
    description: "Desarrollo Web",
    image: "images/desarroloweb_ Microsoft Learn.jpg"
  },
  {
    id: 3,
    title: "¿Mi misión?",
    description: "Transformar ideas en realidades digitales que conecten y resuelvan problemas, mientras sigo creciendo y aprendiendo.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

export default function StackingCards() {
  const cardsWrapperRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && cardsWrapperRef.current) {
      const numCards = cards.length;
      cards.forEach((_, index) => {
        const card = document.querySelector(`#card_${index + 1}`);
        if (card) {
          gsap.fromTo(card, 
            { 
              opacity: 0, 
              y: 50 
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                end: "bottom center",
                toggleActions: "play none none reverse"
              }
            }
          );
          gsap.to(card, {
            scale: 1 - (0.05 * (numCards - index - 1)),
            scrollTrigger: {
              trigger: cardsWrapperRef.current,
              start: `${index / numCards * 100}%`,
              end: `${(index + 1) / numCards * 100}%`,
              scrub: true
            }
          });
        }
      });

      // Trigger Skills section after last card
      ScrollTrigger.create({
        trigger: cardsWrapperRef.current,
        start: "bottom center",
        onEnter: () => {
          const skillsSection = document.getElementById('skills');
          if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  }, []);

  return (
    <div ref={containerRef} id="about" className="flex flex-col items-center">
      <header className="text-center bg-gray-900 py-12 w-full">
        <div>
          <h1 className="text-7xl font-thin text-center text-white" style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>
            Habilidades y Certificados
          </h1>
        </div>
      </header>
      <main className="w-full max-w-1xl mx-auto">
        <ul id="cards" ref={cardsWrapperRef} className="cards-container flex flex-col items-center">
          {cards.map((card) => (
            <li key={card.id} id={`card_${card.id}`} className="card w-full max-w 1xl mb-16">
              <div className="card__content bg-gray-500 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6 md:p-8">
                  <h2 className="uppercase text-2xl md:text-3xl text-white font-bold mb-4" style={{textShadow: '1px 1px 2px red, 0 0 1em blue'}}>{card.title}</h2>
                  <p className="text-gray-100 text-base md:text-lg" style={{textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'}}>{card.description}</p>
                </div>
                <figure className="hidden md:block">
                  <img src={card.image} alt={card.title} className="w-full h-64 object" />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}