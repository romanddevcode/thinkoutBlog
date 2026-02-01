/**
 * Node modules
 */
import { data, redirect } from 'react-router-dom';

/**
 * Custom modules
 */
import { thinkoutblogApi } from '@/api';

/**
 * Types
 */
import type { LoaderFunction } from 'react-router-dom';
import { AxiosError } from 'axios';

const adminLoader: LoaderFunction = async () => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) return redirect('/');

  try {
    const { data } = await thinkoutblogApi.get('/users/current', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (data.user.role !== 'admin') return redirect('/');
  } catch (err) {
    if (err instanceof AxiosError) {
      throw data(err.response?.data.message || err.message, {
        status: err.response?.status || err.status,
        statusText: err.response?.data.code || err.code,
      });
    }

    throw err;
  }
};

export default adminLoader;
