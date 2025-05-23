'use client';

import { IconShoppingBag, IconUserCircle } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CardModal from './CardModal';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLogged = false;

  const handleProfile = () => {
    if (!isLogged) {
      router.push('/login');
    }
    setIsProfileOpen((prev) => !prev);
  };

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className='flex gap-4 xl:gap-6 relative'>
      <span onClick={handleProfile}>
        <IconUserCircle stroke={2} />
      </span>
      {isProfileOpen && (
        <div className='absolute p-4 rounded-md top-12 left-0 text-small z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <Link href='/'>Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}
      <div className='relative cursor-pointer' onClick={handleCart}>
        <span>
          <IconShoppingBag stroke={1} />
        </span>
        <div className='absolute -bottom-1.5 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-white text-xs'>
          0
        </div>
      </div>
      {isCartOpen && <CardModal />}
    </div>
  );
};

export default NavIcons;
