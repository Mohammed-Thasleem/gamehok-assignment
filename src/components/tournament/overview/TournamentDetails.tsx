import { Calendar, Clock, Medal, Users2 } from "lucide-react";
import type { Tournament } from "@/components/tournament/tournament.types";
import { DetailItem } from "./DetailItem";

interface TournamentDetailsProps {
  tournament: Tournament;
}

export const TournamentDetails = ({ tournament }: TournamentDetailsProps) => {
  return (
    <section>
      <h3 className="mb-3 text-start font-display text-lg font-bold">
        Details
      </h3>

      <div className="grid grid-cols-1 gap-4 rounded-xl md:grid-cols-2 lg:gap-6">
        <DetailItem
          label="TEAM SIZE"
          value={tournament.teamSize}
          icon={<Users2 className="size-6 text-primary" />}
        />
        <DetailItem
          label="TOURNAMENT STARTS"
          value={tournament.startsAt}
          icon={<Calendar className="size-6 text-primary" />}
        />
        <DetailItem
          label="FORMAT"
          value={tournament.format}
          icon={<Medal className="size-6 text-primary" />}
        />
        <DetailItem
          label="CHECK-IN"
          value={tournament.checkIn}
          icon={<Clock className="size-6 text-primary" />}
        />
      </div>
    </section>
  );
};
