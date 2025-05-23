// components/PriceBreakup.tsx

interface PriceItem {
  label: string;
  amount: number | string;
  showIcon?: boolean;
}

interface PriceBreakupProps {
  items: PriceItem[];
}

const PriceBreakup: React.FC<PriceBreakupProps> = ({ items }) => {
  return (
    <div className=''>
      <h2 className='text-base font-semibold mb-2'>Price Breakup</h2>
      <ul className='flex gap-3'>
        {items.map((item, index) => (
          <li key={index} className='flex flex-1 border-r p-3 last:border-none'>
            <div className='flex flex-col'>
              <span className='text-gray-600'>{item.label}</span>
              <span className='text-black font-medium'>
                {new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: 'INR',
                  minimumFractionDigits: 0
                }).format(Number(item.amount))}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceBreakup;
