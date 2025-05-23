import Container from '@/components/Container';
import Filter from '@/components/Filter';
import ProductCard from '@/components/ProductCard';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

const GoldPage = () => {
  return (
    <Container className='py-4 grid grid-cols-[25%_75%]'>
      <Sidebar />
      <div className='px-2'>
        <div className='hidden bg-[#E1CBB4] px-4 sm:flex justify-between h-64'>
          <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
            <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>
              Grab up to 50% off on
              <br /> Selected Products
            </h1>
          </div>
          <div className='relative w-1/3'>
            <Image
              src='/images/gold set.jpg'
              alt=''
              fill
              className='object-contain'
            />
          </div>
        </div>
        {/* Filter */}
        <Filter />
        {/* Product */}
        <h1 className='mt-12 mb-4 text-xl font-semibold'>Shoes For You!</h1>
        {['', '', '', ''].map((_, i) => (
          <ProductCard
            key={i}
            id={34}
            name='Alma Diamond Kada'
            price='$122.00'
            tax='$100.00'
            description='Born to be worn. Clip on the world’s most wearable music player and take up to 240 songs with you anywhere...'
            image='https://opencart.mahardhi.com/MT04/jewels/image/cache/catalog/products/1-270x270.jpg'
            hoverImage='https://opencart.mahardhi.com/MT04/jewels/image/cache/catalog/products/2-270x270.jpg'
          />
        ))}
      </div>
    </Container>
  );
};

export default GoldPage;
