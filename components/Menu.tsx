'use client';

import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span onClick={() => setOpen((prev) => !prev)}>
        {open ? (
          <IconX stroke={2} width={28} height={28} />
        ) : (
          <IconMenu2 stroke={2} width={28} height={28} />
        )}
      </span>
      {open && (
        <div className='absolute bg-white text-black w-64 p-8 left-0 top-20 h-[calc(100vh-80px)] flex flex-col text-left gap-4 text-xl z-10 transition-all ease-in-out duration-700'>
          <Link href='/' className=''>
            Home
          </Link>
          <Link href='/' className='hover:bg-primary hover:text-white'>
            Shop
          </Link>
          <Link href='/' className='hover:bg-primary hover:text-white'>
            Deals
          </Link>
          <Link href='/' className='hover:bg-primary hover:text-white'>
            About
          </Link>
          <Link href='/' className='hover:bg-primary hover:text-white'>
            Contact
          </Link>
          <Link href='/' className='hover:bg-primary hover:text-white'>
            Logout
          </Link>
          <Link href='/' className='hover:bg-primary hover:text-white'>
            Cart
          </Link>
        </div>
      )}
    </div>
  );
};
export default Menu;
