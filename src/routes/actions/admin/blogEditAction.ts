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
import type { ActionFunction } from 'react-router';
import { AxiosError } from 'axios';
import type { ActionResponse } from '@/types';

const blogEditAction: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const slug = params.slug;

  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) return redirect('/');

  try {
    const response = await thinkoutblogApi.put(`/blogs/${slug}`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Encoding': 'multipart/form-data',
      },
    });

    const responseData = response.data;

    return {
      ok: true,
      data: responseData,
    } as ActionResponse;
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

export default blogEditAction;
