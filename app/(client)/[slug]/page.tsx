import Add from '@/components/Add';
import Container from '@/components/Container';
import MetalDetails from '@/components/MetalDetails';
import PriceBreakup from '@/components/PriceBreakup';
import ProductImages from '@/components/ProductImages';

const priceData = [
  { label: 'Gold', amount: 165962, showIcon: true },
  { label: 'Other Stone', amount: '22975.00', showIcon: true },
  { label: 'Making', amount: 44810, showIcon: true },
  { label: 'Tax', amount: 7012, showIcon: false }
];

const metalInfo = [
  { label: 'Metal Purity', value: '22 KT (916)', code: 'gold_purity' },
  { label: 'Metal Colour', value: 'Yellow', code: 'gold_colour' },
  { label: 'Gross Weight ( g. )', value: '21.230', code: 'gross_gold_weight' },
  { label: 'Net Weight ( g. )', value: '18.564', code: 'net_gold_weight' }
];

const SinglePage = () => {
  return (
    <Container className='mt-8'>
      <div className='relative flex flex-col lg:flex-row gap-16'>
        {/* Image */}
        <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
          <ProductImages />
        </div>
        {/* Text */}
        <div className='w-full lg:w-1/2 flex flex-col gap-2'>
          <h1 className='text-2xl font-medium'>Product Name</h1>
          <h3 className='text-base font-normal'>
            Product Code:
            <span className='pl-1 font-bold text-sm'>ASDF66543</span>
          </h3>
          <div className='text-base'>
            Availability:
            <span className='pl-1 font-bold text-sm'>In Stock</span>
          </div>
          <h3 className='text-xl font-bold text-pink-700'>
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              minimumFractionDigits: 0
            }).format(Number(45000))}
          </h3>
          <Add />
          <div className='h-[2px] bg-gray-100' />
          <PriceBreakup items={priceData} />
          <div className='h-0.5 bg-gray-100' />
          <MetalDetails details={metalInfo} />
        </div>
      </div>
    </Container>
  );
};

export default SinglePage;
