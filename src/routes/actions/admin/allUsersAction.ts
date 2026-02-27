/**
 * Node modules
 */
import { redirect } from 'react-router-dom';

/**
 * Custom modules
 */
import { thinkoutblogApi } from '@/api';

/**
 * Types
 */
import type { LoaderFunction } from 'react-router-dom';
import { AxiosError } from 'axios';
import type { ActionResponse } from '@/types';

const allUserAction: LoaderFunction = async ({ request }) => {
  const data = (await request.json()) as { userId: string };

  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) return redirect('/');

  try {
    await thinkoutblogApi.delete(`/users/${data.userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return { ok: true };
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        ok: false,
        err: err.response?.data,
      } as ActionResponse;
    }

    throw err;
  }
};

export default allUserAction;
