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

const likeBlog: ActionFunction = async ({ request, params }) => {
  const blogId = params.blogId;
  const method = request.method;

  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) return redirect('/');

  try {
    if (method === 'POST') {
      await thinkoutblogApi.post(
        `/likes/blog/${blogId}`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );
    }

    if (method === 'DELETE') {
      await thinkoutblogApi.delete(`/likes/blog/${blogId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    }

    return {
      ok: true,
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

export default likeBlog;
