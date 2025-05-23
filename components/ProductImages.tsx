'use client';

import Image from 'next/image';
import { useState } from 'react';

const slides = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className='h-[500px] relative'>
        <Image
          src={slides[index].img}
          alt=''
          fill
          sizes='50vw'
          className='object-cover rounded-md'
        ></Image>
      </div>
      <div className='flex gap-8 mt-8 justify-between'>
        {slides.map((img, i) => (
          <div
            className='w-1/4 h-24 relative gap-4 mt-8 cursor-pointer'
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.img}
              alt=''
              fill
              sizes='30vw'
              className='object-cover rounded-md'
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
