import React from 'react';
import { cn } from '@/app/lib/utils';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const HighlightTitle = ({ children, className }: TitleProps) => {
  return <span className={cn('text-yellow-400', className)}>{children}</span>;
};

export const DefaultTitle = ({ className, children }: TitleProps) => {
  return (
    <h1
      className={cn(
        'text-2xl font-bold mb-2 text-white text-center leading-7',
        className,
      )}
    >
      {children}
    </h1>
  );
};
