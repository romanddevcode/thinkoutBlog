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

const addComment: ActionFunction = async ({ params, request }) => {
  const formData = await request.formData();
  const content = formData.get('content');
  const blogId = params.blogId;

  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) return redirect('/');

  try {
    const response = await thinkoutblogApi.post(
      `/comments/blog/${blogId}`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

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

export default addComment;
