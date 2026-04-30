import { tournaments } from "@/mockData/mock";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TournamentCard } from "@/components/cards/TournamentCard";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { ScrollArrow } from "@/components/common/ScrollArrow";

export const MoreTournaments = () => {
  const { scrollRef, canScrollLeft, canScrollRight, handleScroll } =
    useHorizontalScroll(280);

  return (
    <section>
      <SectionTitle title="More tournaments for you" />
      <div className="relative min-[620px]:hidden">
        <ScrollArrow
          direction="left"
          disabled={!canScrollLeft}
          onClick={() => handleScroll("left")}
          className="size-8"
        />

        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4"
        >
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} {...tournament} />
          ))}
        </div>

        <ScrollArrow
          direction="right"
          disabled={!canScrollRight}
          onClick={() => handleScroll("right")}
          className="size-8"
        />
      </div>

      <div className="hidden min-[620px]:flex gap-4">
        {tournaments.slice(0, 2).map((tournament) => (
          <TournamentCard key={tournament.id} {...tournament} />
        ))}
      </div>
    </section>
  );
};
