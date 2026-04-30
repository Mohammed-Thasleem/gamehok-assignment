import { ArrowLeft, Clock, Crown, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Tournament } from "@/types/tournament";

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
      <button
        onClick={() => navigate(-1)}
        className="mb-4 hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground lg:flex"
      >
        <ArrowLeft className="size-4" /> Back
      </button>

      <div className="relative overflow-hidden rounded-2xl border border-border">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-background/60 backdrop-blur lg:hidden"
        >
          <ArrowLeft className="size-4" />
        </button>

        <button className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-background/60 backdrop-blur">
          <Share2 className="size-4" />
        </button>

        <img
          src={tournament.banner}
          alt={tournament.title}
          className="aspect-[16/7] w-full object-cover lg:aspect-[16/6]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-semibold lg:text-xs">
          <span className="flex items-center gap-1.5 rounded-md bg-background/70 px-2.5 py-1 backdrop-blur">
            <Clock className="size-3 text-primary" />
            {activeTab === "lobbies"
              ? "Next match in 10h 15min"
              : "Registration open: 2nd Mar-10th Apr"}
          </span>

          <span className="rounded-md bg-background/70 px-2.5 py-1 backdrop-blur">
            👥 {tournament.registered}/{tournament.capacity}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-extrabold tracking-tight lg:text-3xl">
            {tournament.title.toUpperCase()}
          </h1>

          <p className="mt-0.5 text-xs text-muted-foreground lg:text-sm">
            BY {tournament.organiser}
          </p>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <span className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary lg:text-xs">
              {tournament.game}
            </span>
            <span className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary lg:text-xs">
              {tournament.entry}
            </span>
          </div>
        </div>

        <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full gradient-purple lg:size-12">
          <Crown className="size-5 text-foreground" />
        </div>
      </div>
    </>
  );
};
