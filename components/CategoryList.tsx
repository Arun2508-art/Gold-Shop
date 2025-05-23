import Image from 'next/image';
import Link from 'next/link';

const CategoryList = ({ products }) => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className='flex gap-4 md:gap-8'>
        {products.map((item) => (
          <Link
            key={item.id}
            href='/'
            className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
          >
            <div className='relative bg-slate-400 w-full h-96'>
              <Image
                src={item.image}
                alt=''
                fill
                sizes='20vw'
                className='object-cover'
              ></Image>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'>
              {item.category}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
