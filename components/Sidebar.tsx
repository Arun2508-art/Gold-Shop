'use client';

import { IconChevronUp } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const sidebarSections = [
  {
    sectionTitle: 'Categories',
    menuItems: [
      {
        label: 'Gemstone',
        route: '/'
      },
      {
        label: 'Diamond',
        children: [
          { label: 'Add Product', route: '/product/add' },
          { label: 'List Product', route: '/product' }
        ]
      },
      {
        label: 'Gold',
        children: [
          { label: 'Add Category', route: '/category/add' },
          { label: 'List Category', route: '/category' }
        ]
      },
      {
        label: 'Chains',
        route: '/orders'
      },
      {
        label: 'Collection',
        children: [
          { label: 'Warehouse', route: '/inventory' },
          { label: 'Received Orders', route: '/inventory/order-received' }
        ]
      },
      {
        label: 'Products',
        route: '/invoice'
      }
    ]
  },
  {
    sectionTitle: 'Users',
    menuItems: [
      {
        label: 'Customers',
        children: [
          { label: 'Add Customer', route: '/addCustomer' },
          { label: 'List Customer', route: '/listCustomer' }
        ]
      },
      {
        label: 'Sellers',
        children: [
          { label: 'Add Seller', route: '/addSeller' },
          { label: 'List Seller', route: '/listSeller' }
        ]
      }
    ]
  }
];

const Sidebar = () => {
  const currentPath = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newOpenMenus: Record<string, boolean> = {};

    sidebarSections.forEach((section) => {
      section.menuItems.forEach((menuItem) => {
        if (menuItem.children?.some((child) => child.route === currentPath)) {
          newOpenMenus[menuItem.label] = true;
        }
      });
    });

    setOpenMenus(newOpenMenus);
  }, [currentPath]);

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className='flex flex-col gap-4 px-1'>
      <div className='flex flex-col justify-between gap-5 flex-1'>
        <ul className='flex flex-col gap-0.5'>
          {sidebarSections.map((item) => (
            <React.Fragment key={item.sectionTitle}>
              {item.sectionTitle && (
                <li className='px-4 py-2 text-xl font-semibold uppercase'>
                  {item.sectionTitle}
                </li>
              )}
              {item.menuItems.map((menuItem) => {
                const isChildActive = menuItem.children?.some(
                  (child) => currentPath === child.route
                );
                return (
                  <React.Fragment key={menuItem.label}>
                    {menuItem.route ? (
                      <li
                        className={`px-4 py-2 hover:text-primary ${
                          currentPath === menuItem.route
                            ? 'text-primary border-l border-primary'
                            : ''
                        }`}
                      >
                        <Link href={menuItem.route} className='text-lg'>
                          {menuItem.label}
                        </Link>
                      </li>
                    ) : (
                      <li className='flex flex-col gap-0.5'>
                        <div
                          className={`flex items-center justify-between px-4 py-2 hover:text-primary cursor-pointer ${
                            isChildActive
                              ? 'text-primary border-l border-primary'
                              : ''
                          }`}
                          onClick={() => toggleMenu(menuItem.label)}
                        >
                          <div className='text-lg'>{menuItem.label}</div>
                          <div className={isChildActive ? 'text-primary' : ''}>
                            <IconChevronUp
                              width={12}
                              height={12}
                              className={
                                openMenus[menuItem.label]
                                  ? 'rotate-180 transition ease-in-out duration-300'
                                  : 'transition ease-in-out duration-300'
                              }
                            />
                          </div>
                        </div>
                        {openMenus[menuItem.label] && (
                          <ul className='px-4 transition-transform animate-fadeInDown ease-in-out duration-700'>
                            {menuItem.children?.map((list) => (
                              <li
                                key={list.label}
                                className={`ps-8 pe-4 py-2 rounded-md hover:text-primary ${
                                  currentPath === list.route
                                    ? 'text-primary'
                                    : ''
                                }`}
                              >
                                <Link
                                  href={list.route}
                                  className='flex text-sm'
                                >
                                  {list.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
