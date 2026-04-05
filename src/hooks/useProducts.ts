import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Product } from '../types/product';

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
  lastFetched: Date | null;
}

const mapSupabaseError = (message: string): string => {
  if (/fetch|network|failed to fetch/i.test(message)) {
    return 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
  }
  if (/permission|denied|unauthor/i.test(message)) {
    return 'Akses ditolak. Periksa kembali kredensial Supabase Anda.';
  }
  if (/relation .* does not exist|does not exist/i.test(message)) {
    return 'Tabel "products" belum tersedia di database. Jalankan skema SQL terlebih dahulu.';
  }
  return message;
};

export const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);

  const fetchProducts = useCallback(async (): Promise<void> => {
    if (!supabase) {
      setError('Supabase client belum terinisialisasi. Periksa environment variables.');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await supabase
        .from('products')
        .select('id, name, stock_count, last_updated')
        .order('id', { ascending: true });

      if (response.error) {
        setError(mapSupabaseError(response.error.message));
        setProducts([]);
        return;
      }

      setProducts((response.data ?? []) as Product[]);
      setLastFetched(new Date());
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : 'Terjadi kesalahan tak terduga.';
      setError(mapSupabaseError(message));
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchProducts();
  }, [fetchProducts]);

  const refetch = useCallback((): void => {
    void fetchProducts();
  }, [fetchProducts]);

  return { products, isLoading, error, refetch, lastFetched };
};
