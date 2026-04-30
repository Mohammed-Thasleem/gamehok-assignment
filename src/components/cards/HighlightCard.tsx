import { Play } from "lucide-react";
import type { HighlightCardProps } from "@/components/cards/cards.types";

export const HighlightCard = ({ title, image, video }: HighlightCardProps) => {
  return (
    <div className="flex min-w-[180px] max-[400px]:max-w-full max-[400px]:shrink-0 flex-col gap-2 cursor-pointer overflow-hidden">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {video && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/90 backdrop-blur">
              <Play className="ml-0.5 size-4 fill-primary-foreground text-primary-foreground" />
            </div>
          </div>
        )}
      </div>
      <span className="text-xs font-semibold text-left">{title}</span>
    </div>
  );
};
