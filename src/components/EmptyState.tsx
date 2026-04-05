import { Card } from './ui/Card';

export const EmptyState = (): JSX.Element => {
  return (
    <Card className="animate-rise p-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="font-mono-tabular text-[10px] uppercase tracking-kicker text-ink-500">
          — Ledger Kosong —
        </span>
        <h3 className="font-display text-2xl font-bold text-ink-950">Belum ada entri produk</h3>
        <p className="max-w-sm text-[13px] leading-relaxed text-ink-600">
          Tabel{' '}
          <code className="rounded-sm bg-ink-100 px-1.5 py-0.5 font-mono-tabular text-[11px] text-ink-800">
            products
          </code>{' '}
          belum berisi data. Tambahkan produk melalui Supabase untuk memulai pencatatan inventaris.
        </p>
      </div>
    </Card>
  );
};
