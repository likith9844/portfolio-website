import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, asChild = false, children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none";
    const v = {
      primary: "bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-[0_4px_20px_-4px_rgba(224,122,95,0.35)] hover:brightness-110",
      secondary: "bg-surface hover:bg-surface-hover text-foreground border border-border-color hover:border-primary/20",
      outline: "border border-primary/40 text-primary hover:bg-primary/8 hover:border-primary",
      ghost: "hover:bg-surface-hover text-muted hover:text-foreground",
    };
    const s = { sm: "h-9 px-4 text-sm", md: "h-11 px-6 text-sm", lg: "h-12 px-7 text-base" };

    if (asChild) {
      return <Slot ref={ref} className={cn(base, v[variant], s[size], className)} {...props}>{children}</Slot>;
    }
    return (
      <button ref={ref} className={cn(base, v[variant], s[size], className)} disabled={isLoading || props.disabled} {...props}>
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
