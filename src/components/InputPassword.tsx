/**
 * Node modules
 */
import { useState } from 'react';

import { cn } from '@/lib/utils';

/**
 * UI components
 */
import { Input } from './ui/input';
import { Toggle } from './ui/toggle';

/**
 * Assets
 */
import { EyeClosedIcon, EyeIcon } from 'lucide-react';

/**
 * Types
 */
type InputPasswordProps = Omit<React.ComponentProps<'input'>, 'type'>;

/**
 * Main code
 */

export const InputPassword: React.FC<InputPasswordProps> = ({
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative'>
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn(
          'pe-12 placeholder:tracking-normal',
          !showPassword && 'tracking-widest',
          className
        )}
        {...props}
      />

      <Toggle
        type='button'
        pressed={showPassword}
        onPressedChange={setShowPassword}
        className='absolute top-1/2 -translate-y-1/2 right-0.5 size-8'
      >
        {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
      </Toggle>
    </div>
  );
};
