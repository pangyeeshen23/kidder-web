'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';
import Carousel from './components/Carousel/carousel';
import { SwiperSlide } from 'swiper/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Home() {
  const mainTitle = useRef(null);
  const buttonRef = useRef(null);

  const facilityCarousel = useRef(null);

  const facilities = [
    { id: 'facilities1', label: 'Modern Classroom', image: '/img/facilities/modern-classroom.jpg' },
    {
      id: 'facilities2',
      label: 'Outdoor Playground',
      image: '/img/facilities/outdoor-playground.jpg',
    },
    { id: 'facilities3', label: 'Library', image: '/img/facilities/library.jpg' },
    { id: 'facilities4', label: 'Dinning Area', image: '/img/facilities/dinning-area.jpg' },
    { id: 'facilities5', label: 'STEM', image: '/img/facilities/stem-corner.jpg' },
  ];

  useEffect(() => {
    let split = new SplitText(mainTitle.current, { type: 'words,chars' });
    gsap.from(split.chars, {
      yPercent: 'random([-100, 100])',
      rotation: 'random([-30, 30])',
      autoAlpha: 0,
      yoyo: true,
      stagger: {
        amount: 0.5,
        from: 'random',
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
          <div className="mt-20 grid grid-cols-2 gap-4 px-16">
            <div className="flex flex-col">
              <h2
                className={`text-4xl font-semibold mb-8 ${styles.barriecitoFont} ${styles.title} text-black`}
              >
                Introduction
              </h2>
              <br />
              <p className="text-xl font-semibold text-black">
                Welcome to the Sunshine Kids Kindergarten, where we nurture young minds in a safe
                and joyful environment. Our dedicated staff is committed to fostering creativity,
                curiosity, and a love for learning in every child. We believe in a holistic approach
                to early childhood education, ensuring that each child receives personalized
                attention and care. Join us as we embark on a journey of discovery and growth,
                laying the foundation for a bright future.
              </p>
              <div className="h-100 flex items-end">
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="/img/kindergarden-intro-2.jpg"
                    alt="Kindergarten Introduction 2"
                    className="rounded-lg shadow-lg object-cover fade-in"
                  />
                  <img
                    src="/img/kindergarden-intro-3.jpg"
                    alt="Kindergarten Introduction 3"
                    className="rounded-lg shadow-lgobject-cover fade-in"
                  />
                  <img
                    src="/img/kindergarden-intro-5.jpg"
                    alt="Kindergarten Introduction 5"
                    className="rounded-lg shadow-lgobject-cover fade-in"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center relative pb-20">
              <img
                src="/img/kindergarden-intro-1.jpg"
                alt="Kindergarten Introduction"
                className="rounded-lg shadow-lg h-175 object-cover fade-in"
              />
              <img
                src="/img/kindergarden-intro-4.jpg"
                alt="Kindergarten Introduction 4"
                className="rounded-lg shadow-lg h-100 object-cover absolute bottom-0 right-55 fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden pt-32 pb-8 bg-dark svelte-hb5zro">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="mt-20 px-16">
            <h2
              className={`text-4xl font-semibold mb-8 ${styles.barriecitoFont} ${styles.title} text-black`}
            >
              Facilities
            </h2>
          </div>
          <div className="relative w-full overflow-hidden mt-10">
            <div
              className=" flex will-change-transform ml-4 max-[500px]:ml-4 sm:ml-8 justify-start"
              role="region"
              aria-label="video carousel"
            >
              {facilities.map((facility) => (
                <div className="relative shrink-0 w-[calc(100vw-2rem)] max-[500px]:w-[calc(100vw-2.5rem)] max-[500px]:mr-2.5 sm:w-[calc(100vw-10rem)] lg:w-[60vw] aspect-1440/920 mr-6 last:mr-0">
                  <img
                    src="/img/facilities/modern-classroom.jpg"
                    alt="Modern Classrooms"
                    className="w-full h-full object-cover object-top rounded-lg"
                  ></img>
                  <span className={`text-center text-2xl text-black ${styles.barriecitoFont}`}>
                    Modern Classrooms
                  </span>
                </div>
              ))}
            </div>
            <div className="flex align-items-center mx-4 max-[500px]:ml-4 sm:ml-8 mt-4 mb-8">
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-zinc-400/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 opacity-50 cursor-not-allowed">
                  <img src="/img/svg/nav-left.svg" alt="Previous" width={16} height={16} />
                </button>
                <button className="w-10 h-10 bg-zinc-400/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 opacity-100">
                  <img src={'/img/svg/nav-right.svg'} alt="Next" width={16} height={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
