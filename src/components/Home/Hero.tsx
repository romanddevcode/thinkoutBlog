/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import { Input } from '../ui/input';
import { Button } from '../ui/button';

/**
 * Types
 */
import type { Variants } from 'motion/react';

/**
 * Constants
 */
const HERO = {
  headline: 'Thoughts That Are Worth Sharing',
  text: 'This blog is built on a simple principle: the best way to understand a topic is to think about it and share with others.',
} as const;

/**
 * Motion variants
 */
const containerVariant: Variants = {
  to: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const childVariant: Variants = {
  from: { opacity: 0, filter: 'blur(10px)' },
  to: {
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const Hero = ({
  className,
  ...props
}: React.ComponentProps<'section'>) => {
  return (
    <section
      className={cn('section', className)}
      {...props}
    >
      <motion.div
        className='container'
        initial='from'
        whileInView='to'
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h1
          className='text-3xl font-semibold text-center text-balance md:text-4xl lg:text-5xl'
          variants={childVariant}
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          className='text-muted-foreground text-balance text-center mt-5 mb-8 md:text-xl'
          variants={childVariant}
        >
          {HERO.text}
        </motion.p>

        <motion.div
          className='max-w-md mx-auto flex items-center gap-2'
          variants={childVariant}
        >
          <Input
            name='email'
            type='email'
            placeholder='Enter your email'
            autoComplete='email'
            aria-label='Enter your email'
          />
          <Button>Subscribe</Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
