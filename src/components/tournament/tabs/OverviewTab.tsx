import { MoreTournaments } from "../MoreTournaments";
import type { Tournament } from "@/types/tournament";
import { TournamentDetails } from "../overview/TournamentDetails";
import { TournamentRounds } from "../overview/TournamentRounds";
import { HowToJoin } from "../overview/HowToJoin";
import { PrizePool } from "../overview/PrizePool";
import { OrganiserCard } from "../overview/OrganiserCard";

interface OverviewTabProps {
  tournament: Tournament;
}

export const OverviewTab = ({ tournament }: OverviewTabProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="flex min-w-0 flex-col space-y-6 py-3 pr-0 lg:border-r lg:border-border lg:pr-8">
        <TournamentDetails tournament={tournament} />
        <TournamentRounds tournament={tournament} />
        <HowToJoin tournament={tournament} />
        <MoreTournaments />
      </div>

      <aside className="space-y-6 py-3">
        <PrizePool tournament={tournament} />
        <OrganiserCard tournament={tournament} />
      </aside>
    </div>
  );
};
