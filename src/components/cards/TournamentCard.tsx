import { Link } from "react-router-dom";
import { StatusPill } from "@/components/common/StatusPill";
import { Trophy } from "lucide-react";
import coinIcon from "@/assets/coins.png";
import gsLogo from "@/assets/gs.png";
import type { TournamentCardProps } from "@/types/cards";

export const TournamentCard = ({
  id,
  title,
  banner,
  status,
  registered,
  capacity,
  prizePool,
  game,
  mode,
  entry,
}: TournamentCardProps) => {
  return (
    <Link
      to={`/tournament/${id}`}
      className="flex flex-col max-w-[300px] max-[620px]:shrink-0 snap-start overflow-hidden rounded-[8px] border border-border transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 lg:w-[320px]"
    >
      <div className="relative h-32 overflow-hidden lg:h-36">
        <img
          src={banner}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        <span className="absolute left-2 top-2 rounded-2xl bg-background/80 px-2 py-1 text-xs font-semibold">
          {status}
        </span>

        <span className="absolute right-2 top-2 rounded-2xl bg-background/80 px-2 py-1 text-xs font-semibold backdrop-blur">
          👥 {registered}/{capacity}
        </span>
      </div>
      <div className="w-full flex items-center gap-1.5 py-2 px-3 text-left bg-blue-2">
        <Trophy className="size-4" />{" "}
        <p className="text-xs">Prize Pool - {prizePool}</p>
        <img src={coinIcon} alt="coin" className="size-4" />
      </div>

      <div className=" relative p-3 text-left">
        <img
          src={gsLogo}
          alt="GS Esports"
          className="absolute right-2 bottom-16 size-11 rounded-full object-contain lg:size-12"
        />
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <StatusPill label={game} highlight />
          <StatusPill label={mode} highlight />
          <StatusPill label={entry} highlight icon={coinIcon} />
        </div>
      </div>
    </Link>
  );
};
