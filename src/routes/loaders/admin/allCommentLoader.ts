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

const allCommentLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) return redirect('/');

  try {
    const { data } = await thinkoutblogApi.get('/comments', {
      params: Object.fromEntries(url.searchParams.entries()),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
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

export default allCommentLoader;
