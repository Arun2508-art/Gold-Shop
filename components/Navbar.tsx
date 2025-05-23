import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import Menu from './Menu';
import NavIcons from './NavIcons';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Container className='h-20 py-5 relative border-b border-borderPrimary'>
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
    </Container>
  );
};

export default Navbar;
