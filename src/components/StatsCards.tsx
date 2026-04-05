import { Card } from './ui/Card';
import { StatBlock, StatLabel } from './StatBlock';
import { formatNumber } from '../lib/utils';
import type { Product } from '../types/product';

interface StatsCardsProps {
  products: Product[];
}

const LOW_STOCK_THRESHOLD = 10;

export const StatsCards = ({ products }: StatsCardsProps): JSX.Element => {
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + product.stock_count, 0);
  const lowStockCount = products.filter((p) => p.stock_count < LOW_STOCK_THRESHOLD).length;
  const avgStock = totalProducts > 0 ? Math.round(totalStock / totalProducts) : 0;
  const hasAlert = lowStockCount > 0;

  return (
    <section className="grid gap-4 lg:grid-cols-5" aria-label="Ringkasan inventaris">
      <Card accent="accent" tickTop className="animate-rise-delay-1 p-6 lg:col-span-2">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <StatLabel>Total Stok</StatLabel>
            <span className="font-mono-tabular text-[10px] uppercase tracking-ledger text-ink-400">
              Akumulatif
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono-tabular text-6xl font-semibold leading-none text-ink-950 sm:text-7xl">
              {formatNumber(totalStock)}
            </span>
            <span className="text-xs font-medium uppercase tracking-ledger text-ink-500">unit</span>
          </div>
          <div className="flex items-center gap-2 border-t border-hairline/70 pt-4 text-[11px] text-ink-600">
            <span className="text-accent-600">✓</span>
            Seluruh SKU terdata dalam ledger
          </div>
        </div>
      </Card>

      <Card accent="healthy" tickTop className="animate-rise-delay-2 p-6 lg:col-span-2">
        <div className="grid grid-cols-2 gap-5 divide-x divide-hairline/70">
          <StatBlock label="SKU Aktif" value={formatNumber(totalProducts)} suffix="item" />
          <StatBlock
            label="Rata-rata"
            value={formatNumber(avgStock)}
            suffix="per SKU"
            className="pl-5"
          />
        </div>
      </Card>

      <Card accent={hasAlert ? 'critical' : 'healthy'} tickTop className="animate-rise-delay-3 p-6 lg:col-span-1">
        <div className="flex h-full flex-col justify-between gap-4">
          <StatLabel>Low Stock</StatLabel>
          <div className="flex items-baseline gap-2">
            <span
              className={`font-mono-tabular text-5xl font-semibold leading-none ${
                hasAlert ? 'text-critical-700' : 'text-healthy-700'
              }`}
            >
              {formatNumber(lowStockCount)}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-ledger text-ink-500">
              {hasAlert ? 'alert' : 'ok'}
            </span>
          </div>
          <span className="font-mono-tabular text-[10px] uppercase tracking-ledger text-ink-500">
            stok &lt; {LOW_STOCK_THRESHOLD}
          </span>
        </div>
      </Card>
    </section>
  );
};
