/**
 * Custom modules
 */

import { cn } from '@/lib/utils';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

/**
 * Assets
 */
import { Instagram, Linkedin, Github } from 'lucide-react';

/**
 * Constants
 */
const SOCIAL_LINKS = [
  { href: '#1', Icon: Instagram, label: 'Instagram' },
  {
    href: 'https://www.linkedin.com/in/roman-durniev-004575388/',
    Icon: Linkedin,
    label: 'Linkedin',
  },
  { href: 'https://github.com/romanddevcode', Icon: Github, label: 'Github' },
] as const;

export const Footer = ({
  className,
  ...props
}: React.ComponentProps<'footer'>) => {
  return (
    <footer
      className={cn('border-t', className)}
      {...props}
    >
      <div className='container py-8 grid max-md:justify-items-center md:grid-cols-[1fr_3fr_1fr] md:items-center'>
        <Logo />

        <p className='text-muted-foreground order-1 max-md:text-center md:order-none md:justify-self-center'>
          &copy; {new Date().getFullYear()} romanddevcode. All right reserved.
        </p>

        <ul className='flex items-center gap-1 max-md:mt-6 max-md:mb-4 md:justify-self-end'>
          {SOCIAL_LINKS.map(({ href, Icon, label }) => (
            <li key={href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='ghost'
                    size='icon'
                    aria-label={label}
                    asChild
                  >
                    <a
                      href={href}
                      target='_blank'
                    >
                      <Icon />
                    </a>
                  </Button>
                </TooltipTrigger>

                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
