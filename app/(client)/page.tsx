'use client';
import BannerSection from '@/components/BannerSection';
import Container from '@/components/Container';
import ProductList from '@/components/ProductList';
import ServiceBox from '@/components/ServiceBox';
import Silder from '@/components/Silder';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { allProduct } from '@/store/slices/productSlice';
import { useEffect } from 'react';

export interface ProductProps {
  category?: string;
  description?: string;
  id?: number;
  image: string;
  price?: number;
  title: string;
}

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
      <Container className='mt-12 2xl:px-0'>
        <h1 className='text-4xl font-normal text-center'>Products</h1>
        <ProductList products={products} />
      </Container>
    </div>
  );
};

export default HomePage;
