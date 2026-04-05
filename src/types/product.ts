export interface Product {
  id: number;
  name: string;
  stock_count: number;
  last_updated: string;
}

export type StockStatus = 'healthy' | 'warning' | 'critical';
