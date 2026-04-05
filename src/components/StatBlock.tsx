interface StatBlockProps {
  label: string;
  value: string;
  suffix: string;
  valueClassName?: string;
  className?: string;
}

export const StatLabel = ({ children }: { children: string }): JSX.Element => (
  <span className="text-[10px] font-bold uppercase tracking-kicker text-ink-600">
    {children}
  </span>
);

export const StatBlock = ({
  label,
  value,
  suffix,
  valueClassName,
  className,
}: StatBlockProps): JSX.Element => (
  <div className={`flex flex-col gap-4 ${className ?? ''}`}>
    <StatLabel>{label}</StatLabel>
    <div className="flex items-baseline gap-2">
      <span
        className={`font-mono-tabular text-4xl font-semibold leading-none text-ink-950 ${
          valueClassName ?? ''
        }`}
      >
        {value}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-ledger text-ink-500">
        {suffix}
      </span>
    </div>
  </div>
);
