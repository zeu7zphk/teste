import React from 'react';
import { cn } from '@/app/lib/utils';
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
} & React.ComponentProps<'button'>;
const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full bg-white text-start px-5 h-16 font-semibold text-md text-black rounded-xl transition-transform duration-300 hover:scale-105 border shadow-intern',
        className,
      )}
    >
      {children}
    </button>
  );
};

export const ContinueButtonDisabled = ({
  children,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      disabled
      onClick={onClick}
      className={cn(
        'w-full mb-5 bg-gray-400 text-center px-5 h-14 font-semibold text-gray-700 rounded-xl text-lg border',
        className,
      )}
    >
      {children}
    </button>
  );
};

export const ContinueButton = ({
  children,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full bg-white mb-5 text-center px-5 h-14 font-semibold text-gray-700 rounded-xl text-lg border',
        className,
      )}
    >
      {children}
    </button>
  );
};
export default Button;
