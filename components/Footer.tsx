import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandPinterestFilled,
  IconBrandXFilled,
  IconBrandYoutubeFilled
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='py-8 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-black text-white text-sm mt-24'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-3'>
          {/* <Link href='/'>
            <div className='text-2xl tracking-wide'>LAMA</div>
          </Link> */}
          <div className='text-xl uppercase mb-2'>Contact</div>
          <p>3252 Jewels Street, Central Plaza, TamilNadu</p>
          <span className='font-semibold'>hello@jewel.dev</span>
          <span className='font-semibold'>+91 2345678900</span>
          <div className='flex gap-6 text-primary'>
            <IconBrandFacebookFilled stroke={1.5} width={16} height={16} />
            <IconBrandInstagramFilled stroke={1.5} width={16} height={16} />
            <IconBrandYoutubeFilled stroke={1.5} width={16} height={16} />
            <IconBrandPinterestFilled stroke={1.5} width={16} height={16} />
            <IconBrandXFilled width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-medium text-lg mb-2'>INFORMATION</h1>
            <div className='flex flex-col gap-3 text-base'>
              <Link href='' className='hover:text-primary'>
                About Us
              </Link>
              <Link href='' className='hover:text-primary'>
                Delivery Information
              </Link>
              <Link href='' className='hover:text-primary'>
                Affiliates
              </Link>
              <Link href='' className='hover:text-primary'>
                Terms & Condition
              </Link>
              <Link href='' className='hover:text-primary'>
                Contact Us
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-3 text-base'>
            <h1 className='font-medium text-lg mb-2'>SHOP</h1>
            <div className='flex flex-col gap-3 text-base'>
              <Link href='' className='hover:text-primary'>
                New Arrivals
              </Link>
              <Link href='' className='hover:text-primary'>
                Accessories
              </Link>
              <Link href='' className='hover:text-primary'>
                Men
              </Link>
              <Link href='' className='hover:text-primary'>
                Women
              </Link>
              <Link href='' className='hover:text-primary'>
                All Products
              </Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          {/* <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className='flex'>
            <input
              type='text'
              placeholder='Email address'
              className='p-4 w-3/4'
            />
            <button className='w-1/4 bg-fram text-white'>JOIN</button>
          </div> */}
          <span className='font-semibold'>PAY WITH</span>
          <div className='flex flex-col gap-3 justify-between'>
            <Image
              className='bg-slate-300 p-1 rounded-md cursor-pointer'
              src='/discover.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              className='bg-slate-300 p-1 rounded-md cursor-pointer'
              src='/skrill.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              className='bg-slate-300 p-1 rounded-md cursor-pointer'
              src='/paypal.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              className='bg-slate-300 p-1 rounded-md cursor-pointer'
              src='/mastercard.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              className='bg-slate-300 p-1 rounded-md cursor-pointer'
              src='/visa.png'
              alt=''
              width={40}
              height={20}
            />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mt-8 border-t border-gray-600 pt-2'>
        <div className=''>© 2025 Jewels Shop</div>
      </div>
    </div>
  );
};

export default Footer;
