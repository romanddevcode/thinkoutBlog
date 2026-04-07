/**
 * Node modules
 */
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

/**
 * Components
 */
import Avatar from 'react-avatar';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

/**
 * Assets
 */
import {
  ThumbsUpIcon,
  TrashIcon,
  SquareArrowOutUpRightIcon,
} from 'lucide-react';

/**
 * Types
 */
import type { User } from '@/types';
type Props = {
  content: string;
  user: User | null;
  createdAt: string;
};

export const CommentCard = ({ content, user, createdAt }: Props) => {
  return (
    <div className='@container'>
      <div className='group flex flex-col items-start gap-4 p-4 rounded-xl hover:bg-accent/25 @md:flex-row'>
        <Avatar
          email={user?.email}
          size='40'
          round
        />

        <div className='flex flex-col gap-2 me-auto'>
          <div className='flex items-center gap-2'>
            {user ? (
              <div>@{user.username}</div>
            ) : (
              <div className='text-sm text-destructive/80 italic'>
                <Tooltip delayDuration={250}>
                  <TooltipTrigger>Account deleted</TooltipTrigger>

                  <TooltipContent>This account has been removed</TooltipContent>
                </Tooltip>
              </div>
            )}

            <div className='size-1 rounded-full bg-muted-foreground/50'></div>

            <div className='text-sm text-muted-foreground'>
              <Tooltip delayDuration={250}>
                <TooltipTrigger>
                  {formatDistanceToNow(createdAt, { addSuffix: true })}
                </TooltipTrigger>

                <TooltipContent>
                  {new Date(createdAt).toLocaleString('en-US', {
                    dateStyle: 'long',
                    timeStyle: 'short',
                  })}
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className='max-w-[60ch]'>{content}</div>
        </div>
      </div>
    </div>
  );
};
