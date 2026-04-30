interface StatusPillProps {
  label: string;
  highlight?: boolean;
  icon?: string;
}

export const StatusPill = ({
  label,
  highlight = false,
  icon,
}: StatusPillProps) => {
  return (
    <span
      className={`flex items-center gap-1 rounded-sm px-2 py-0.5 text-xs lg:text-xs ${
        highlight
          ? "border-primary/20 bg-primary-inverted text-foreground"
          : "border-border bg-surface-elevated text-muted-foreground"
      }`}
    >
      {label}
      {icon && <img src={icon} alt={label} className="size-3 object-contain" />}
    </span>
  );
};
