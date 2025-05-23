'use client';
import { IconHeart, IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  tax: string;
  description: string;
  image: string;
  hoverImage: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  tax,
  description,
  image,
  hoverImage
}) => {
  return (
    <div className='w-full flex flex-col sm:flex-row border p-4 rounded-md shadow-md relative'>
      {/* Product Images */}
      <div className='relative w-full sm:w-1/3 mb-4 sm:mb-0 aspect-square overflow-hidden'>
        <Link href={`/${id}`} className='block relative w-full h-full'>
          {/* Hover effect with two stacked images */}
          <Image
            src={image}
            alt={name}
            fill
            className='object-cover transition-opacity duration-300 ease-in-out hover:opacity-0 rounded-md'
          />
          <Image
            src={hoverImage}
            alt={`${name} - hover`}
            fill
            className='object-cover opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-md absolute top-0 left-0'
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className='flex-1 flex flex-col justify-between pl-4'>
        <div className='flex gap-4 items-center justify-between'>
          <h4 className='text-lg font-semibold mb-1'>
            <Link href={`/${id}`} className='hover:underline'>
              {name}
            </Link>
          </h4>

          <button
            title='Wishlist'
            onClick={() => console.log(`Wishlist ${id}`)}
            className='p-1 rounded-full hover:bg-primary hover:text-white'
          >
            <IconHeart stroke={1} width={16} height={16} />
          </button>
        </div>

        <div className='flex items-center text-yellow-400 text-sm mb-2'>
          {[...Array(5)].map((_, i) => (
            <IconStarFilled key={i} />
          ))}
        </div>

        <p className='text-xl text-gray-900 font-bold mb-1'>{price}</p>
        <p className='text-sm text-gray-500 mb-4'>Ex Tax: {tax}</p>

        <p className='text-gray-600 mb-4'>{description}</p>

        <button
          className='w-fit bg-primary text-white px-4 py-2 rounded hover:bg-fram transition'
          onClick={() => console.log(`Add to cart ${id}`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
