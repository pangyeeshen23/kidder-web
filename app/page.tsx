'use client'
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {useState} from 'react';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger }from "gsap/ScrollTrigger"
import styles from "./page.module.css"
import OpenCards from './components/opencards';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText);

export default function Home() {
  const mainTitle = useRef(null);
  const nameRef = useRef(null);
  const buttonRef = useRef(null);
  const rainbowRef = useRef(null);
  const descriptionRef = useRef(null);

  const introSectionRef = useRef(null);
  const experSectionRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [active, setActive] = useState("nav1");
  useGSAP(() =>
  {
    gsap.fromTo(nameRef.current, { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration : 1})
    gsap.fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration : 1, delay: 1})
    gsap.fromTo(rainbowRef.current, { opacity: 0 }, { opacity: 1, duration : 1 })
    gsap.fromTo(descriptionRef.current, { opacity: 0, y: 200}, { opacity: 1, y: 0, duration : 1})


  }, []);

  useEffect(() => {
    let split = new SplitText(mainTitle.current, { type: "words,chars" });
    gsap.from(split.chars, {
      yPercent: "random([-100, 100])",
      rotation: "random([-30, 30])",
      autoAlpha: 0,
      yoyo: true,
      stagger: {
        amount: 0.5,
        from: "random" 
      }
    });
    return () => split.revert();
  }, []);

  useLayoutEffect(() => {
    const sectionEl = introSectionRef.current
    const items = itemRefs.current
    if (!sectionEl || items.length === 0) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",     // when section hits top of viewport
          end: "+=1500",        // how far to scroll for full animation
          scrub: true,          // tie animation progress to scroll
          pin: true,            // keep section fixed during scroll
        },
      })

      items.forEach((item) => {
        gsap.set(item, { y: 80, opacity: 0});

        tl.to(
          item,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease:"power3.out"
          }
        );

        tl.to(
          item,
          {
            opacity: 1,
            duration: 0.3,
          }
        ),

        tl.to(item, {
          y: -80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        })
      })
     
    }, sectionEl)

    return () => ctx.revert()
  }, [])


  return (
    <div>
      <section className="relative w-full h-screen">
        <div className={`absolute inset-0 ${styles.heroBackground} `}>
        </div>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="flex flex-col items-center gap-12 text-center justify-center items-center size-full">
              <h1 ref={mainTitle} className={`${styles.heroTitle} text-8xl font-semibold tracking-tight  dark:text-zinc-50 main-title`}>
                Sunshine Kids <br /> Kindergarten
              </h1>
              <a ref={buttonRef}
                className="flex h-12 w-full items-center justify-center 
                  gap-2 rounded-full bg-foreground px-5 text-background 
                  transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]
                  z-1"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Connect 
              </a>
          </div>
      </section>
      
      <section id="expertiseSection" ref={experSectionRef} className="min-h-screen from-blue-200 via-blue-100 to-white py-16">
        <div
          className="w-full h-full flex flex-col justify-center items-center"
          ref={(el) => { itemRefs.current[1] = el; }}
        >
          <OpenCards />
        </div>
      </section>
    </div>
  );
}
