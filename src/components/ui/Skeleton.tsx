import { cn } from '../../lib/utils';

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps): JSX.Element => {
  return (
    <div
      className={cn('animate-pulse-soft rounded-sm bg-ink-200/80', className)}
      aria-hidden="true"
    />
  );
};
