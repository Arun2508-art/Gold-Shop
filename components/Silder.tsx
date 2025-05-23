'use client';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50'
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-50 to-blue-50'
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50'
  }
];

const Silder = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    if (current <= 0) {
      setCurrent(slides.length - 1);
      return;
    }
    setCurrent((prev) => prev - 1);
  };

  const handleNext = () => {
    if (current > slides.length - 2) {
      setCurrent(0);
      return;
    }
    setCurrent((prev) => prev + 1);
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   });

  return (
    <div className='h-[calc(100vh-170px)] overflow-hidden relative'>
      <div className='w-max h-full flex'>
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 md:flex-row transition-all ease-in-out duration-1000`}
            style={{ transform: `translateX(-${current * 100}vw)` }}
            key={slide.id}
          >
            {/* Text Container */}
            <div className='h-1/2 md:w-1/2 md:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
              <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
                {slide.description}
              </h2>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className='rounded-md bg-primary text-white py-3 px-4'>
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* Image Container */}
            <div className='relative h-1/2 md:w-1/2 md:h-full'>
              <Image
                src={slide.img}
                alt=''
                fill
                sizes='100%'
                className='object-cover'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute left-10 bottom-1/2'>
        <div
          className='rounded-full ring-1 ring-gray-200 bg-white p-2 cursor-pointer flex items-center justify-center z-50 shadow-lg'
          onClick={handlePrev}
        >
          <IconChevronLeft width={16} height={16} />
        </div>
      </div>
      <div className='absolute right-10 bottom-1/2'>
        <div
          className={`rounded-full ring-1 ring-gray-200 bg-white p-2 cursor-pointer flex items-center justify-center z-50 shadow-lg`}
          onClick={handleNext}
        >
          <IconChevronRight width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Silder;
