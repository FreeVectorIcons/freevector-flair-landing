
import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline' | 'ghost' | 'link' | 'subtle';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'wide';
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', children, isLoading, className, ...props }, ref) => {
    // Map our custom variants to shadcn variants
    const variantMapping: Record<string, string> = {
      default: 'default',
      primary: 'default bg-primary text-primary-foreground hover:bg-primary/90',
      outline: 'outline',
      ghost: 'ghost',
      link: 'link',
      subtle: 'ghost bg-secondary/50 text-secondary-foreground hover:bg-secondary/80',
    };

    // Map our custom sizes to shadcn sizes
    const sizeMapping: Record<string, string> = {
      default: 'px-5 py-2.5',
      sm: 'px-3 py-1.5 text-sm',
      lg: 'px-7 py-3.5 text-lg',
      icon: 'h-10 w-10',
      wide: 'w-full py-2.5',
    };

    return (
      <ShadcnButton
        ref={ref}
        variant={variantMapping[variant].split(' ')[0] as any}
        className={cn(
          'font-medium rounded-full transition-all duration-300 ease-out relative overflow-hidden',
          variant === 'primary' && 'shadow-md hover:shadow-lg',
          variant === 'outline' && 'hover:bg-secondary/50 border-2',
          sizeMapping[size],
          isLoading && 'opacity-70 pointer-events-none',
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        <span className={cn('relative z-10 flex items-center justify-center gap-2', isLoading && 'opacity-0')}>
          {children}
        </span>
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
      </ShadcnButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };
