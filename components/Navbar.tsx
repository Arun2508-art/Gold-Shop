import { IconClockHour9 } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import NavIcons from './NavIcons';
import SearchBar from './SearchBar';
import StickyNav from './StickyNav';

const Navbar = () => {
  return (
    <>
      {/* TOP  */}
      <div className='hidden lg:flex h-10 bg-primary text-white items-center justify-between py-2 px-4'>
        <div className='flex gap-2 items-center'>
          <IconClockHour9 width={16} height={16} />
          Mon-Sat: 8.00 - 18.00 / Sun: Closed
        </div>
        <div>Login</div>
      </div>

      {/* MIDDLE */}
      <div className='w-full h-20 px-4 py-5 relative border-b border-borderPrimary'>
        {/* Mobile */}
        <div className='md:hidden h-full flex items-center justify-between'>
          <Link href='/'>
            <div className='text-2xl tracking-wide'>Jewels</div>
          </Link>
          <Menu />
        </div>
        {/* Bigger Screen */}
        <div className='hidden md:flex items-center justify-between gap-8 h-full'>
          {/* Left */}
          <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
            <Link
              href='/'
              className='flex items-center gap-3 focus-visible:outline-none'
            >
              <Image src='/logo.png' alt='' width={24} height={24} />
              <div className='text-2xl tracking-wide'>Jewels</div>
            </Link>
          </div>
          {/* Right */}
          <div className='w-2/3 flex items-center justify-between gap-8'>
            <SearchBar />
            <NavIcons />
          </div>
        </div>
      </div>

      {/* BOTTOM MENU */}
      {/* <nav className='h-[50px] hidden lg:flex items-center justify-center gap-8 text-[15px] font-bold py-2.5 transition-colors duration-500 ease-out'>
        <Link
          href='/'
          className='relative py-1 hover:text-primary after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full hover:after:left-0'
        >
          HOME
        </Link>
        <Link
          href='/gemstone'
          className='relative py-1 hover:text-primary after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full hover:after:left-0'
        >
          GEMSTONE
        </Link>
        <Link
          href='/diamond'
          className='relative py-1 hover:text-primary after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full hover:after:left-0'
        >
          DIAMOND
        </Link>
        <Link
          href='/gold'
          className='relative py-1 hover:text-primary after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full hover:after:left-0'
        >
          GOLD
        </Link>
        <Link
          href='/more'
          className='relative py-1 hover:text-primary after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full hover:after:left-0'
        >
          MORE
        </Link>
      </nav> */}

      <StickyNav />
    </>
  );
};

export default Navbar;
