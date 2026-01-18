"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Home() {
  const mainTitle = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    let split = new SplitText(mainTitle.current, { type: "words,chars" });
    gsap.from(split.chars, {
      yPercent: "random([-100, 100])",
      rotation: "random([-30, 30])",
      autoAlpha: 0,
      yoyo: true,
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });
    return () => split.revert();
  }, []);

  return (
    <div>
      <section className="relative w-full h-screen">
        <div className={`absolute inset-0 ${styles.heroBackground} `}></div>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="flex flex-col gap-12 text-center justify-center items-center size-full">
          <h1
            ref={mainTitle}
            className={`${styles.barriecitoFont} text-8xl font-semibold tracking-tight  dark:text-zinc-50 main-title`}
          >
            Sunshine Kids <br /> Kindergarten
          </h1>
          <a
            ref={buttonRef}
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

      <section className="min-h-screen bg-yellow-50  py-16">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h2
            className={`text-4xl font-semibold mb-8 ${styles.barriecitoFont} ${styles.title} text-black`}
          >
            Introduction
          </h2>
        </div>
      </section>
    </div>
  );
}
