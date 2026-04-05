import { StockBadge } from './StockBadge';
import { formatDate, formatNumber, getStockStatus } from '../lib/utils';
import type { Product, StockStatus } from '../types/product';

interface ProductTableRowProps {
  product: Product;
  index: number;
}

const rowAccentBar: Record<StockStatus, string> = {
  healthy: 'bg-healthy-600',
  warning: 'bg-warning-600',
  critical: 'bg-critical-600',
};

const buildSkuCode = (id: number, name: string): string => {
  const prefix = name.slice(0, 3).toUpperCase().replace(/\s/g, '');
  return `${prefix}-${String(id).padStart(4, '0')}`;
};

export const ProductTableRow = ({ product, index }: ProductTableRowProps): JSX.Element => {
  const status = getStockStatus(product.stock_count);
  return (
    <tr className="group relative border-b border-hairline/60 transition-colors duration-150 last:border-b-0 hover:bg-accent-50/40">
      <td className="relative px-6 py-4 align-middle">
        <span
          className={`absolute inset-y-3 left-0 w-[3px] ${rowAccentBar[status]}`}
          aria-hidden="true"
        />
        <span className="font-mono-tabular text-[11px] font-medium text-ink-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </td>
      <td className="px-4 py-4 align-middle">
        <span className="font-mono-tabular text-[11px] font-medium text-ink-500">
          {buildSkuCode(product.id, product.name)}
        </span>
      </td>
      <td className="px-4 py-4 align-middle">
        <span className="text-[14px] font-semibold text-ink-950">{product.name}</span>
      </td>
      <td className="px-4 py-4 text-right align-middle">
        <span className="font-mono-tabular text-lg font-semibold text-ink-950">
          {formatNumber(product.stock_count)}
        </span>
      </td>
      <td className="px-4 py-4 align-middle">
        <StockBadge stockCount={product.stock_count} />
      </td>
      <td className="px-6 py-4 text-right align-middle">
        <span className="font-mono-tabular text-[11px] text-ink-500">
          {formatDate(product.last_updated)}
        </span>
      </td>
    </tr>
  );
};
