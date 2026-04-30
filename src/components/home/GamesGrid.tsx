import { games, gamesMobile } from "@/mockData/mock";
import { SectionTitle } from "@/components/common/SectionTitle";
import { GameCard } from "@/components/cards/GameCard";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { ScrollArrow } from "@/components/common/ScrollArrow";

export const GamesGrid = () => {
  const { scrollRef, canScrollLeft, canScrollRight, handleScroll } =
    useHorizontalScroll(260);

  return (
    <section>
      <SectionTitle title="Play Tournament by Games" showViewAll={false} />

      <div className="grid grid-cols-3 gap-2.5 min-[620px]:hidden">
        {gamesMobile.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>

      <div className="relative hidden min-[620px]:block">
        <ScrollArrow
          direction="left"
          disabled={!canScrollLeft}
          onClick={() => handleScroll("left")}
          className="-left-3 size-9"
          iconSize="size-5"
        />

        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 lg:mx-0 lg:px-0"
        >
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        <ScrollArrow
          direction="right"
          disabled={!canScrollRight}
          onClick={() => handleScroll("right")}
          className="-right-3 size-9"
          iconSize="size-5"
        />
      </div>
    </section>
  );
};
