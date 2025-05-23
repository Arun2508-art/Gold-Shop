'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from './Container';

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const triggerHeight = 100; // Adjust as needed
      setIsSticky(offset > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const StyleLink = ({
    children,
    href
  }: {
    children: string;
    href: string;
  }) => {
    return (
      <Link
        href={href}
        className='relative py-1 hover:text-primary after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-out hover:after:w-full hover:after:left-0'
      >
        {children}
      </Link>
    );
  };

  return (
    <Container className='py-2.5'>
      <nav
        className={`h-[50px] hidden lg:flex items-center justify-center gap-8 text-[15px] font-bold transition-all duration-1000 ease-out w-full ${
          isSticky
            ? 'fixed top-0 z-50 bg-white shadow-md animate-fadeInDown'
            : ''
        }`}
      >
        <StyleLink href='/'>HOME</StyleLink>
        <StyleLink href='/gemstone'>GEMSTONE</StyleLink>
        <StyleLink href='/diamond'>DIAMOND</StyleLink>
        <StyleLink href='/gold'>GOLD</StyleLink>
        <StyleLink href='/more'>MORE</StyleLink>
      </nav>
    </Container>
  );
};

export default StickyNavbar;
