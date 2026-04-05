import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-ink-950 text-canvas border-ink-950 hover:bg-ink-900 focus-visible:ring-accent-600 disabled:bg-ink-900/60',
  secondary:
    'bg-surface text-ink-900 border-hairline-strong hover:bg-canvas-deep focus-visible:ring-accent-600',
  ghost:
    'bg-transparent text-ink-700 border-transparent hover:bg-ink-100 focus-visible:ring-accent-600',
};

export const Button = ({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      {...rest}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-sm border px-3.5 py-2',
        'text-[11px] font-semibold uppercase tracking-ledger',
        'transition-all duration-150 active:scale-[0.97]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
        'disabled:cursor-not-allowed disabled:opacity-60',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
