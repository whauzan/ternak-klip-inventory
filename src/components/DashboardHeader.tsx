import { Button } from './ui/Button';
import { formatRelativeTime } from '../lib/utils';

interface DashboardHeaderProps {
  onRefresh: () => void;
  isRefreshing: boolean;
  lastFetched: Date | null;
}

export const DashboardHeader = ({
  onRefresh,
  isRefreshing,
  lastFetched,
}: DashboardHeaderProps): JSX.Element => {
  const freshnessLabel =
    lastFetched === null ? 'Belum pernah dimuat' : `Diperbarui ${formatRelativeTime(lastFetched)}`;

  return (
    <header className="flex flex-col gap-8 border-b border-hairline pb-10">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-kicker text-accent-700">
          <span className="h-px w-6 bg-accent-600" aria-hidden="true" />
          Ternak Klip <span className="text-hairline-strong">§</span> Operations
        </span>
        <span className="font-mono-tabular text-[10px] uppercase tracking-ledger text-ink-500">
          N°001 / INVENTORY
        </span>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="font-display text-[44px] font-extrabold leading-[0.95] text-ink-950 sm:text-[56px]">
            Inventory<br />
            <span className="text-accent-700">Ledger</span>
            <span className="text-ink-300">.</span>
          </h1>
          <p className="text-sm leading-relaxed text-ink-600 sm:text-[15px]">
            Catatan stok produk secara realtime. Data bersumber langsung dari database operasional{' '}
            <span className="font-mono-tabular text-[13px] text-ink-800">Supabase</span>.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="hidden items-center gap-2 font-mono-tabular text-[10px] uppercase tracking-ledger text-ink-500 sm:inline-flex"
            aria-live="polite"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isRefreshing ? 'animate-breathe bg-warning-600' : 'bg-healthy-600'
              }`}
              aria-hidden="true"
            />
            {freshnessLabel}
          </span>
          <Button onClick={onRefresh} disabled={isRefreshing} aria-label="Refresh data inventaris">
            <RefreshIcon spinning={isRefreshing} />
            {isRefreshing ? 'Memuat' : 'Refresh'}
          </Button>
        </div>
      </div>
    </header>
  );
};

const RefreshIcon = ({ spinning }: { spinning: boolean }): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={spinning ? 'animate-spin' : ''} aria-hidden="true">
    <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" /><path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" /><path d="M3 21v-5h5" />
  </svg>
);
