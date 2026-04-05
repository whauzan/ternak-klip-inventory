import { Card } from './ui/Card';
import { Skeleton } from './ui/Skeleton';

const SKELETON_ROW_COUNT = 5;

export const StatsCardsSkeleton = (): JSX.Element => {
  return (
    <section className="grid gap-4 lg:grid-cols-5" aria-label="Memuat ringkasan">
      <Card className="p-6 lg:col-span-2">
        <span className="block h-[3px] w-full -translate-y-6 bg-ink-200" aria-hidden="true" />
        <div className="flex flex-col gap-5">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-14 w-40" />
          <Skeleton className="h-3 w-48" />
        </div>
      </Card>
      <Card className="p-6 lg:col-span-2">
        <span className="block h-[3px] w-full -translate-y-6 bg-ink-200" aria-hidden="true" />
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-9 w-20" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-9 w-20" />
          </div>
        </div>
      </Card>
      <Card className="p-6 lg:col-span-1">
        <span className="block h-[3px] w-full -translate-y-6 bg-ink-200" aria-hidden="true" />
        <div className="flex flex-col gap-4">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-10 w-14" />
          <Skeleton className="h-3 w-20" />
        </div>
      </Card>
    </section>
  );
};

export const ProductTableSkeleton = (): JSX.Element => {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
        <Skeleton className="h-3 w-36" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="divide-y divide-hairline/60">
        {Array.from({ length: SKELETON_ROW_COUNT }).map((_, index) => (
          <div key={index} className="flex items-center gap-4 px-6 py-4">
            <Skeleton className="h-3 w-6" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-4 flex-1 max-w-[220px]" />
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-16" />
            <Skeleton className="hidden h-3 w-28 sm:block" />
          </div>
        ))}
      </div>
    </Card>
  );
};
