import { IconHeart, IconShoppingBag } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <div className='mt-12 flex gap-4 flex-wrap'>
      {products.slice(0, 8).map((item) => (
        <Link
          key={item.id}
          href='/'
          className='group relative w-full flex flex-grow flex-col gap-2 sm:w-[45%] lg:w-[22%] border border-orderPrimary rounded-md shadow-md hover:shadow-xl'
        >
          {/* Image Section */}
          <div className='relative w-full h-48'>
            <div className='absolute inset-0'>
              <Image
                src='/images/chain.jpg'
                alt={item.title}
                fill
                sizes='25vw'
                className='rounded-md object-contain transition-transform hover:scale-110 duration-700'
              />
            </div>

            {/* Wishlist Icon - Top Right */}
            <button
              type='button'
              aria-label='Add to wishlist'
              className='absolute top-2 right-2 z-20 rounded-full bg-primary opacity-0 group-hover:opacity-100 p-1.5 text-white hover:bg-white hover:text-primary transition-colors duration-300'
              onClick={(e) => {
                e.preventDefault();
                alert(`Wishlist clicked for ${item.title}`);
              }}
            >
              <IconHeart width={20} height={20} stroke={1.5} />
            </button>
          </div>

          {/* Main Content Section - Vertically Centered */}
          <div className='flex flex-col items-center gap-2 p-4 flex-grow justify-between mb-1'>
            <h3 className='line-clamp-2 text-sm text-center'>{item.title}</h3>
            <div className='font-semibold text-sm'>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(item.price)}
            </div>
          </div>

          {/* Button Container - Aligned to the Bottom */}
          <div className='absolute bottom-0 left-0 w-full flex justify-center px-4 pb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto'>
            <button className='flex items-center justify-center gap-1 rounded-full px-3 py-1.5 bg-primary text-white text-xs hover:bg-fram uppercase transition-all ease-out duration-300'>
              <IconShoppingBag width={20} height={20} stroke={1} />
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
