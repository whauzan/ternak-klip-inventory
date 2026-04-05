import { DashboardHeader } from './components/DashboardHeader';
import { StatsCards } from './components/StatsCards';
import { ProductTable } from './components/ProductTable';
import { ErrorState } from './components/ErrorState';
import { EmptyState } from './components/EmptyState';
import { EnvMissing } from './components/EnvMissing';
import { ProductTableSkeleton, StatsCardsSkeleton } from './components/DashboardSkeleton';
import { useProducts } from './hooks/useProducts';
import { getMissingEnvVars, hasValidEnv } from './lib/supabase';

const App = (): JSX.Element => {
  if (!hasValidEnv()) {
    return <EnvMissing missing={getMissingEnvVars()} />;
  }

  return <Dashboard />;
};

const Dashboard = (): JSX.Element => {
  const { products, isLoading, error, refetch, lastFetched } = useProducts();

  const hasProducts = products.length > 0;
  const showInitialSkeleton = isLoading && !hasProducts && error === null;

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
        <DashboardHeader
          onRefresh={refetch}
          isRefreshing={isLoading}
          lastFetched={lastFetched}
        />

        <main className="flex flex-col gap-6">
          {error !== null && <ErrorState message={error} onRetry={refetch} />}

          {showInitialSkeleton && (
            <>
              <StatsCardsSkeleton />
              <ProductTableSkeleton />
            </>
          )}

          {!showInitialSkeleton && error === null && (
            <div className="flex flex-col gap-6">
              <StatsCards products={products} />
              {hasProducts ? <ProductTable products={products} /> : <EmptyState />}
            </div>
          )}
        </main>

        <footer className="flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center">
          <span className="font-mono-tabular text-[10px] uppercase tracking-ledger text-ink-500">
            Ternak Klip § Operations Dept § Internal Tool
          </span>
          <span className="font-mono-tabular text-[10px] uppercase tracking-ledger text-ink-400">
            v0.1.0 / MVP
          </span>
        </footer>
      </div>
    </div>
  );
};

export default App;
