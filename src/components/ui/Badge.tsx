import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type BadgeTone = 'healthy' | 'warning' | 'critical' | 'neutral';

interface BadgeProps {
  tone: BadgeTone;
  children: ReactNode;
  className?: string;
}

const toneClasses: Record<BadgeTone, string> = {
  healthy: 'text-healthy-700 bg-healthy-50 border-healthy-600/30',
  warning: 'text-warning-700 bg-warning-50 border-warning-600/30',
  critical: 'text-critical-700 bg-critical-50 border-critical-600/30',
  neutral: 'text-ink-700 bg-ink-100 border-ink-500/25',
};

export const Badge = ({ tone, children, className }: BadgeProps): JSX.Element => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm border px-2 py-[3px]',
        'text-[10px] font-semibold uppercase tracking-ledger',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
};
