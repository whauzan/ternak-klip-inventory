import { Card } from './ui/Card';
import { ProductTableRow } from './ProductTableRow';
import { formatNumber } from '../lib/utils';
import type { Product } from '../types/product';

interface ProductTableProps {
  products: Product[];
}

const COLUMNS: Array<{ label: string; align?: 'right'; width?: string }> = [
  { label: 'N°', width: 'w-14' },
  { label: 'SKU' },
  { label: 'Produk' },
  { label: 'Stok', align: 'right' },
  { label: 'Status' },
  { label: 'Diperbarui', align: 'right' },
];

export const ProductTable = ({ products }: ProductTableProps): JSX.Element => {
  return (
    <Card className="animate-rise overflow-hidden">
      <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-600" aria-hidden="true" />
          <h2 className="text-[10px] font-bold uppercase tracking-kicker text-ink-900">
            Manifest Produk
          </h2>
        </div>
        <span className="font-mono-tabular text-[10px] uppercase tracking-ledger text-ink-500">
          {formatNumber(products.length)} entri
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-hairline bg-canvas/50">
              {COLUMNS.map((col, i) => (
                <th
                  key={col.label}
                  className={`${col.width ?? ''} ${i === 0 ? 'px-6' : i === COLUMNS.length - 1 ? 'px-6' : 'px-4'} py-3 text-[9px] font-bold uppercase tracking-ledger text-ink-500 ${col.align === 'right' ? 'text-right' : ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductTableRow key={product.id} product={product} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
