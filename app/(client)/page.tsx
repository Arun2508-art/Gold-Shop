'use client';
import BannerSection from '@/components/BannerSection';
import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import ServiceBox from '@/components/ServiceBox';
import Silder from '@/components/Silder';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { allProduct } from '@/store/slices/productSlice';
import { useEffect } from 'react';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productData);

  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);

  console.log(products);

  return (
    <div className=''>
      <Silder />
      <ServiceBox />
      <BannerSection />
      <div className='mt-12 px-4 2xl:px-0'>
        <h1 className='text-4xl font-normal text-center'>Featured Products</h1>
        <ProductList products={products} />
      </div>
      <div className='mt-24'>
        <h1 className='text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12'>
          Categories
        </h1>
        <CategoryList products={products} />
      </div>
    </div>
  );
};

export default HomePage;
