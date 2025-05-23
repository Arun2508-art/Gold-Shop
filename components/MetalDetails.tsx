// components/MetalDetails.tsx

interface MetalDetail {
  label: string;
  value: string | number;
  code: string;
}

interface MetalDetailsProps {
  details: MetalDetail[];
}

const MetalDetails: React.FC<MetalDetailsProps> = ({ details }) => {
  return (
    <div>
      <h2 className='text-base font-semibold mb-2'>Metal Information</h2>
      <ul className='bg-white p-4 rounded-lg shadow-md space-y-3'>
        {details.map((detail) => (
          <li
            key={detail.code}
            className='flex justify-between text-sm border-b pb-2 last:border-none'
          >
            <span className='text-gray-700'>{detail.label}</span>
            <span className='text-gray-900 font-medium'>{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetalDetails;
