'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BannerSection() {
  return (
    <section className='mt-10 px-4 2xl:px-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Banner 1 */}
        <div className='relative rounded-md'>
          <Link href='#'>
            <Image
              src='/images/banner1.jpg'
              alt='Bracelet Jewellery'
              width={600}
              height={400}
              className='w-full h-auto object-cover rounded-md'
            />
          </Link>
          <div className='absolute inset-0 flex flex-col justify-center items-start p-6 rounded-md'>
            <h3 className='text-lg font-bold mb-2'>Sale 20% Discounts</h3>
            <p className='text-3xl mb-4'>Bracelet Jewellery</p>
            <button className='bg-primary text-white px-4 py-2 text-xs font-semibold rounded-md'>
              Shop Now
            </button>
          </div>
        </div>

        {/* Banner 2 */}
        <div className='relative rounded-md'>
          <Link href='#'>
            <Image
              src='/images/banner2.jpg'
              alt='Necklace Jewellery'
              width={600}
              height={400}
              className='w-full h-auto object-cover rounded-md'
            />
          </Link>
          <div className='absolute inset-0 flex flex-col justify-center items-start p-6 rounded-md'>
            <h3 className='text-lg font-bold mb-2'>Only from $195.00</h3>
            <p className='text-3xl mb-4'>Necklace Jewellery</p>
            <button className='bg-primary text-white px-4 py-2 text-xs font-semibold rounded-md'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
