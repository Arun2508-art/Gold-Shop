import { IconClockHour9 } from '@tabler/icons-react';
import Container from './Container';

const HeaderMarquee = () => {
  return (
    <Container className='hidden lg:flex h-10 bg-primary text-white items-center justify-between py-2'>
      <div className='flex gap-2 items-center'>
        <IconClockHour9 width={16} height={16} />
        Mon-Sat: 8.00 - 18.00 / Sun: Closed
      </div>
      <div>Login</div>
    </Container>
  );
};

export default HeaderMarquee;
