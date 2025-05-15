import { cn } from '@/app/lib/utils';

type CheckboxProps = {
  children: React.ReactNode;
  className?: string;
  onCheckedChange?: () => void;
} & React.ComponentProps<'input'>;
export const Checkbox = ({ children, className, ...props }: CheckboxProps) => {
  return (
    <div
      {...props}
      className={cn(
        'flex items-center border justify-between w-full bg-transparent border-gray-700 rounded-xl py-4 px-6',
        className,
      )}
    >
      <label className="ml-2 text-gray-100">{children}</label>

      <input
        type="checkbox"
        className="h-5 w-5 min-w-5 min-h-5 text-blue-600"
      />
    </div>
  );
};

export default Checkbox;
