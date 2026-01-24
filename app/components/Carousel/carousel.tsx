'use client';

import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface CarouselProps {
  children: ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {children}
    </Swiper>
  );
}
