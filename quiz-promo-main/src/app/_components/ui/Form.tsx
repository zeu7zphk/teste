import { ComponentProps } from 'react';

import { cn } from '@/app/lib/utils';
type FormProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'form'>;
const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form
      {...props}
      className={cn('flex flex-col w-full gap-2', className)}
      autoComplete="off"
    >
      {children}
    </form>
  );
};

export default Form;
