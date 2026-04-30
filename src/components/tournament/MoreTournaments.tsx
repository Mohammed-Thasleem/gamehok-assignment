import { tournaments } from "@/mockData/mock";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TournamentCard } from "@/components/cards/TournamentCard";

export const MoreTournaments = () => {
  return (
    <section>
      <SectionTitle title="More tournaments for you" />

      <div className="scrollbar-hide -mx-1 flex gap-3 overflow-x-auto px-1">
        {tournaments.slice(2, 5).map((tournament) => (
          <TournamentCard key={tournament.id} {...tournament} />
        ))}
      </div>
    </section>
  );
};
