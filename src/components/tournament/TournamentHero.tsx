import { ArrowLeft, Clock, Share2 } from "lucide-react";
import gsIcon from "@/assets/gs.png";
import { useNavigate } from "react-router-dom";
import type { Tournament } from "@/components/tournament/tournament.types";
import { StatusPill } from "../common/StatusPill";

interface TournamentHeroProps {
  tournament: Tournament;
  activeTab: string;
}

export const TournamentHero = ({
  tournament,
  activeTab,
}: TournamentHeroProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-4 hidden items-center justify-between lg:flex">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back
        </button>

        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <Share2 className="size-4" /> Share
        </button>
      </div>

      <div className="relative overflow-hidden rounded-[8px] border border-border">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-background/60 backdrop-blur lg:hidden"
        >
          <ArrowLeft className="size-4" />
        </button>

        <button className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-background/60 backdrop-blur lg:hidden">
          <Share2 className="size-4" />
        </button>

        <img
          src={tournament.banner}
          alt={tournament.title}
          className="aspect-[16/7] w-full object-cover lg:aspect-[16/6]"
        />

        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 rounded-md bg-background/80 px-2.5 py-1 backdrop-blur">
            <Clock className="size-3 text-primary" />
            {activeTab === "lobbies"
              ? "Next match in 10h 15min"
              : "Registration open: 2nd Mar-10th Apr"}
          </span>

          <span className="rounded-md bg-background/80 px-2.5 py-1 backdrop-blur">
            👥 {tournament.registered}/{tournament.capacity}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="font-display text-xl font-bold tracking-tight lg:text-2xl">
            {tournament.title.toUpperCase()}
          </h1>

          <p className="mt-0.5 text-xs text-foreground font-semibold lg:text-sm">
            BY {tournament.organiser}
          </p>

          <div className="mt-2 flex flex-wrap gap-1.5">
            <StatusPill label={tournament.game} highlight />
            <StatusPill label={tournament.entry} highlight />
          </div>
        </div>
        <img src={gsIcon} alt="GS Icon" className="size-12" />
      </div>
    </>
  );
};
