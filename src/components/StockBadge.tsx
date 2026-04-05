import { Badge } from './ui/Badge';
import { getStockStatus } from '../lib/utils';
import type { StockStatus } from '../types/product';

interface StockBadgeProps {
  stockCount: number;
}

const statusLabel: Record<StockStatus, string> = {
  healthy: 'Aman',
  warning: 'Rendah',
  critical: 'Kritis',
};

const statusGlyph: Record<StockStatus, string> = {
  healthy: '●',
  warning: '◆',
  critical: '■',
};

const statusGlyphClass: Record<StockStatus, string> = {
  healthy: 'text-healthy-600',
  warning: 'text-warning-600',
  critical: 'text-critical-600',
};

export const StockBadge = ({ stockCount }: StockBadgeProps): JSX.Element => {
  const status = getStockStatus(stockCount);
  return (
    <Badge tone={status}>
      <span className={`text-[8px] ${statusGlyphClass[status]}`} aria-hidden="true">
        {statusGlyph[status]}
      </span>
      {statusLabel[status]}
    </Badge>
  );
};
