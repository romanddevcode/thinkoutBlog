/**
 * Node modules
 */
import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Placeholder } from '@tiptap/extensions';

/**
 * Components
 */
import { Toolbar } from '@/components/Toolbar';

/**
 * Types
 */
import type { EditorProviderProps } from '@tiptap/react';
type TiptapProps = Omit<EditorProviderProps, 'extensions' | 'slotBefore'>;

/**
 * Initial extensions and content for tiptap editor
 */
const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: false,
      keepAttributes: true,
    },
  }),
  Placeholder.configure({
    placeholder: 'Content goes here',
  }),
];

export const Tiptap: React.FC<TiptapProps> = ({ ...props }) => {
  return (
    <EditorProvider
      extensions={extensions}
      slotBefore={
        <Toolbar className='sticky top-16 bg-background z-10 rounded-t-xl' />
      }
      editorContainerProps={{ className: 'p-4' }}
      {...props}
    ></EditorProvider>
  );
};
