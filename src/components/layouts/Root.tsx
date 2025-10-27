import { Outlet } from 'react-router';
import { Loading } from '@/components/Loading';

export const RootLayout = () => {
  return (
    <div className='flex flex-col mid-h-dvh'>
      <Loading className='z-40' />
    </div>
  );
};
