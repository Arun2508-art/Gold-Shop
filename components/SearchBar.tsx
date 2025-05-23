'use client';

import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const navbarSearch = formData.get('navbar-search') as string;

    if (navbarSearch) {
      router.push(`/list?name=${navbarSearch}`);
    }
  };
  return (
    <form
      className='flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'
      onSubmit={handleSearch}
    >
      <input
        type='text'
        name='navbar-search'
        placeholder='Search'
        className='flex-1 bg-transparent outline-none'
      />
      <button className='cursor-pointer'>
        <IconSearch stroke={2} />
      </button>
    </form>
  );
};

export default SearchBar;
