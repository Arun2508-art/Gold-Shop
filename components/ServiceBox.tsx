'use client';

import { IconGiftFilled } from '@tabler/icons-react';
import Container from './Container';

export default function ServiceBox() {
  const services = [
    {
      icon: 'icon-plane1', // Replace with actual icon class or SVG
      title: 'FREE SHIPPING WORLDWIDE',
      description: 'On order over $150'
    },
    {
      icon: 'icon-wallet',
      title: 'CASH ON DELIVERY',
      description: '100% money back guarantee'
    },
    {
      icon: 'icon-gift',
      title: 'SPECIAL GIFT CARD',
      description: 'Offer special bonuses with gift'
    },
    {
      icon: 'icon-support',
      title: '24/7 CUSTOMER SERVICE',
      description: 'Call us 24/7 at 123 - 456 - 789'
    }
  ];

  return (
    <Container className='py-8 bg-neutral-100'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex items-center text-center gap-2 py-1 border-r border-borderPrimary last:border-none'
          >
            {/* Replace this with a real icon or SVG */}
            <div className='text-primary p-2'>
              <IconGiftFilled width={40} height={40} />
            </div>
            <div className='text-left'>
              <h4 className='text-sm font-bold uppercase'>{service.title}</h4>
              <span className='text-xs text-gray-500'>
                {service.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
