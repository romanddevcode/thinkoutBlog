/**
 * Node modules
 */
import { Outlet } from 'react-router';

/**
 * Components
 */
import { Loading } from '@/components/Loading';
import { Header } from '@/components/Header';

export const RootLayout = () => {
  return (
    <div className='flex flex-col mid-h-dvh'>
      <Loading className='z-40' />

      <Header />

      <main className='frow flex flex-col'>
        <Outlet />
      </main>
    </div>
  );
};
