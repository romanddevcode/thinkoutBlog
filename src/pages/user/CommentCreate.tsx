/**
 * Node modules
 */
import { useFetcher, useLoaderData } from 'react-router-dom';
import { toast } from 'sonner';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Types
 */
import type { Blog } from '@/types';

/**
 * Components
 */
import { CommentForm } from '@/components/CommentForm';

export const CommentCreate = () => {
  const fetcher = useFetcher();
  const { blog } = useLoaderData() as { blog: Blog };

  const isSubmitting = fetcher.state === 'submitting';

  return (
    <div
      className={cn(
        'max-w-3xl w-full mx-auto p-4',
        isSubmitting && 'opacity-50 pointer-events-none',
      )}
    >
      <CommentForm
        onSubmit={({ content }) => {
          const commentText = content;

          const submitPromise = fetcher.submit(
            { content: commentText },
            {
              method: 'post',
              action: `/comments/${blog._id}`,
            },
          );

          toast.promise(submitPromise, {
            loading: 'Publishing comment...',
            success: {
              message: 'Comment Published Successfully!',
              description: 'Your comment is now live and visible to everyone.',
            },
            error: {
              message: 'Failed to Publish Comment',
              description:
                'Something went wrong while publishing your comment. Please try again later.',
            },
          });
        }}
      />
    </div>
  );
};
