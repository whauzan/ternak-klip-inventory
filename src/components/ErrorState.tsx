import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorState = ({ message, onRetry }: ErrorStateProps): JSX.Element => {
  return (
    <Card accent="critical" tickTop className="animate-rise p-6">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-critical-600/30 bg-critical-50 font-mono-tabular text-lg font-bold text-critical-700">
            !
          </span>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-kicker text-critical-700">
              Error § Ledger
            </span>
            <h3 className="font-display text-[17px] font-bold text-ink-950">
              Gagal memuat data inventaris
            </h3>
            <p className="max-w-xl text-[13px] leading-relaxed text-ink-600">{message}</p>
          </div>
        </div>
        {onRetry && (
          <Button variant="secondary" onClick={onRetry} aria-label="Coba muat ulang data">
            Coba Lagi
          </Button>
        )}
      </div>
    </Card>
  );
};
