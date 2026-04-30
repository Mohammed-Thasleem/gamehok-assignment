import { Clock } from "lucide-react";
import type { LobbyCardProps } from "@/types/cards";

export const LobbyCard = ({ name, status }: LobbyCardProps) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-xl border border-border gradient-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3" />
          {status}
        </p>
      </div>

      <button className="text-xs font-bold uppercase tracking-wider text-primary">
        View Participants
      </button>
    </div>
  );
};
