'use client';

import Image from 'next/image';

const CardModal = () => {
  const cartItems = true;

  return (
    <div className='w-max absolute top-12 right-0 p-4 rounded-md shadow-[0_3px_20px_rgb(0,0,0,0.2)] z-20 flex flex-col gap-6 bg-white'>
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className='text-xl'>Shopping Cart</h2>
          <div className='flex flex-col gap-8'>
            {/* Item */}
            <div className='flex gap-8'>
              <Image
                src='https://images.pexels.com/photos/12327637/pexels-photo-12327637.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt=''
                width={72}
                height={96}
                className='object-cover rounded-md'
              />
              <div className='flex flex-col justify-between w-full'>
                {/* Top */}
                <div>
                  {/* Title */}
                  <div className='flex items-center justify-between gap-8'>
                    <h3 className='font-semibold'>Product Name</h3>
                    <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                  </div>
                  {/* Desc */}
                  <div className='text-sm text-gray-500'>available</div>
                </div>
                {/* Bottom */}
                <div className='flex items-center justify-between gap-8'>
                  <span className='text-gray-500'>Qty.2</span>
                  <span className='text-blue-500'>Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div>
            <div className='flex justify-between items-center font-semibold'>
              <h3 className=''>Subtotal</h3>
              <div>$ 40.5</div>
            </div>
            <p className='mt-2 mb-4 text-gray-500'>
              Shipping nad taxes calculated at checkout.
            </p>
            <div className='flex justify-between gap-8 text-sm'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                View cart
              </button>
              <button className='rounded-md py-3 px-4 bg-black text-white'>
                Check out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardModal;
