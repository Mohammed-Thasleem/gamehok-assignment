import type { GameCardProps } from "@/components/cards/cards.types";

export const GameCard = ({ name, image }: GameCardProps) => {
  return (
    <div className="flex flex-col min-[620px]:min-w-[170px] min-[620px]:shrink-0 gap-3 overflow-hidden transition-all duration-300 hover:border-primary/40">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform rounded-[8px] duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span className="text-center text-xs min-[500px]:text-sm font-semibold tracking-wide lg:text-base">
        {name}
      </span>
    </div>
  );
};
