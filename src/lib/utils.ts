import type { StockStatus } from '../types/product';

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Jakarta',
});

const numberFormatter = new Intl.NumberFormat('id-ID');

export const formatDate = (isoString: string): string => {
  const parsed = new Date(isoString);
  if (Number.isNaN(parsed.getTime())) {
    return '—';
  }
  return `${dateFormatter.format(parsed)} WIB`;
};

export const formatNumber = (value: number): string => numberFormatter.format(value);

export const formatRelativeTime = (date: Date): string => {
  const diffMs = Date.now() - date.getTime();
  const diffSec = Math.max(0, Math.round(diffMs / 1000));
  if (diffSec < 10) return 'baru saja';
  if (diffSec < 60) return `${diffSec} detik lalu`;
  const diffMin = Math.round(diffSec / 60);
  if (diffMin < 60) return `${diffMin} menit lalu`;
  const diffHour = Math.round(diffMin / 60);
  if (diffHour < 24) return `${diffHour} jam lalu`;
  return formatDate(date.toISOString());
};

export const getStockStatus = (count: number): StockStatus => {
  if (count >= 30) return 'healthy';
  if (count >= 10) return 'warning';
  return 'critical';
};

type ClassValue = string | undefined | false | null;

export const cn = (...classes: ClassValue[]): string =>
  classes.filter((entry): entry is string => Boolean(entry)).join(' ');
