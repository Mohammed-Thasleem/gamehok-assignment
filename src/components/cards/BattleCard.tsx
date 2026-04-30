import { ChevronRight } from "lucide-react";
import type { BattleCardProps } from "@/types/cards";

export const BattleCard = ({
  badge,
  name,
  by,
  description,
}: BattleCardProps) => {
  return (
    <div className="max-w-[250px] rounded-[8px] border border-border gradient-card p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
      <div className="mx-auto mb-3 flex items-center justify-center">
        <img
          src={badge}
          alt={name}
          className="size-12 rounded-full object-contain lg:size-14"
        />
      </div>

      <h4 className="font-display text-sm font-semibold">{name}</h4>
      <p className="text-[10px]">{by}</p>
      <p className="mt-2 text-xs leading-relaxed lg:text-xs">{description}</p>

      <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Explore scrims <ChevronRight className="size-3" />
      </button>
    </div>
  );
};
