import type { MissingEnv } from '../lib/supabase';

interface EnvMissingProps {
  missing: MissingEnv;
}

export const EnvMissing = ({ missing }: EnvMissingProps): JSX.Element => {
  const missingKeys = (Object.entries(missing) as Array<[keyof MissingEnv, boolean]>)
    .filter(([, isMissing]) => isMissing)
    .map(([key]) => key);

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas p-6">
      <div className="animate-rise w-full max-w-lg rounded-sm border border-hairline bg-surface">
        <span className="block h-[3px] w-full bg-critical-600" aria-hidden="true" />
        <div className="flex flex-col gap-4 p-7">
          <span className="text-[10px] font-bold uppercase tracking-kicker text-critical-700">
            Environment § Error
          </span>
          <h1 className="font-display text-2xl font-bold text-ink-950">
            Konfigurasi Supabase tidak ditemukan
          </h1>
          <p className="text-[13px] leading-relaxed text-ink-600">
            Aplikasi tidak dapat berjalan tanpa environment variable berikut. Tambahkan ke file{' '}
            <code className="rounded-sm bg-ink-100 px-1.5 py-0.5 font-mono-tabular text-[11px] text-ink-800">
              .env
            </code>{' '}
            pada root proyek lalu restart server development.
          </p>
          <ul className="flex flex-col gap-2 border-l-2 border-critical-600 bg-canvas-deep/40 p-3 pl-4">
            {missingKeys.map((key) => (
              <li
                key={key}
                className="font-mono-tabular text-[12px] font-semibold text-critical-700"
              >
                — {key}
              </li>
            ))}
          </ul>
          <p className="font-mono-tabular text-[11px] uppercase tracking-ledger text-ink-500">
            Ref: .env.example
          </p>
        </div>
      </div>
    </div>
  );
};
