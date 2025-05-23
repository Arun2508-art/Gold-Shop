'use client';

import { IconMinus, IconPlus } from '@tabler/icons-react';
// import { useCartStore } from "@/hooks/useCartStore";
// import { useWixClient } from "@/hooks/useWixClient";
import { useState } from 'react';

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  // TEMPORARY
  const stock = 4;

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>

      <div className='flex items-center gap-4'>
        <div className='bg-gray-100 py-1 px-3 rounded-lg flex items-center justify-between w-32'>
          <button
            className='cursor-pointer text-base disabled:cursor-not-allowed disabled:opacity-20'
            onClick={() => handleQuantity('d')}
            disabled={quantity === 1}
          >
            <IconMinus width={16} height={16} />
          </button>
          {quantity}
          <button
            className='cursor-pointer text-base disabled:cursor-not-allowed disabled:opacity-20'
            onClick={() => handleQuantity('i')}
            // disabled={quantity === stockNumber}
          >
            <IconPlus width={16} height={16} />
          </button>
        </div>
        {stock < 1 ? (
          <div className='text-xs'>Product is out of stock</div>
        ) : (
          <div className='text-xs'>
            Only <span className='text-orange-500'>{stock} items</span> left!
            <br /> {"Don't"} miss it
          </div>
        )}
      </div>

      <div className='flex gap-4'>
        <button className='w-36 text-sm rounded-md bg-primary text-white py-2 px-4 hover:bg-fram hover:text-white disabled:cursor-not-allowed'>
          Add to Cart
        </button>
        <button className='w-36 text-sm rounded-md bg-primary text-white py-2 px-4 hover:bg-fram hover:text-white disabled:cursor-not-allowed'>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Add;
