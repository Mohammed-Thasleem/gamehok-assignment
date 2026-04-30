import type { ReactNode } from "react";

interface DetailItemProps {
  label: string;
  value: string;
  icon: ReactNode;
}

export const DetailItem = ({ label, value, icon }: DetailItemProps) => {
  return (
    <div className="flex gap-2.5">
      <div className="flex size-8 shrink-0 items-center justify-center">
        {icon}
      </div>

      <div className="flex flex-col items-start">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
};
