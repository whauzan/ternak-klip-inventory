import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  accent?: 'accent' | 'healthy' | 'warning' | 'critical';
  tickTop?: boolean;
}

const accentBarMap: Record<NonNullable<CardProps['accent']>, string> = {
  accent: 'bg-accent-600',
  healthy: 'bg-healthy-600',
  warning: 'bg-warning-600',
  critical: 'bg-critical-600',
};

export const Card = ({ children, className, accent, tickTop }: CardProps): JSX.Element => {
  return (
    <div
      className={cn(
        'relative rounded-sm border border-hairline bg-surface',
        'shadow-[0_1px_0_0_rgba(20,23,29,0.04),0_1px_2px_0_rgba(20,23,29,0.04)]',
        className,
      )}
    >
      {tickTop && accent && (
        <span
          aria-hidden="true"
          className={cn('absolute left-0 right-0 top-0 h-[3px]', accentBarMap[accent])}
        />
      )}
      {children}
    </div>
  );
};
