/**
 * Node modules
 */
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Tiptap } from '@/components/Tiptap';

/**
 * Assets
 */
import { GalleryThumbnailsIcon } from 'lucide-react';

/**
 * Types
 */
type CommentFormData = {
  content: string;
};

type FormDefaultValue = {
  content: string;
};

type CommentFormProps = {
  defaultValue?: FormDefaultValue;
  onSubmit: (formData: CommentFormData) => void;
};

export const CommentForm: React.FC<CommentFormProps> = ({
  defaultValue,
  onSubmit,
}) => {
  const [data, setData] = useState<CommentFormData>({
    content: defaultValue?.content || '',
  });

  return (
    <div className='relative min-h-9 isolate'>
      <div className='relative border inset-ring-border rounded-xl'>
        <Tiptap
          onUpdate={({ editor }) =>
            setData((prevData) => ({ ...prevData, content: editor.getHTML() }))
          }
          content={data.content}
        />
      </div>

      <div className='flex justify-end items-center gap-2 sticky bottom-0 py-4 bg-background isolate after:absolute after:bottom-full after:w-full after:h-10 after:bg-gradient-to-t after:from-background after:to-transparent after:-z-10 after:pointer-events-none'>
        <Button
          variant='outline'
          onClick={() =>
            onSubmit({
              content: data.content,
            })
          }
        >
          Publish
        </Button>
      </div>
    </div>
  );
};
