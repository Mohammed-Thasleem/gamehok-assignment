import { highlights } from "@/mockData/mock";
import { SectionTitle } from "@/components/common/SectionTitle";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { ScrollArrow } from "@/components/common/ScrollArrow";

export const HighlightsSection = () => {
  const { scrollRef, canScrollLeft, canScrollRight, handleScroll } =
    useHorizontalScroll(220);

  return (
    <section>
      <SectionTitle title="Game Highlights" />

      <div className="relative min-[400px]:hidden">
        <ScrollArrow
          direction="left"
          disabled={!canScrollLeft}
          onClick={() => handleScroll("left")}
          className="size-8"
        />

        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4"
        >
          {highlights.map((highlight) => (
            <HighlightCard key={highlight.id} {...highlight} />
          ))}
        </div>

        <ScrollArrow
          direction="right"
          disabled={!canScrollRight}
          onClick={() => handleScroll("right")}
          className="size-8"
        />
      </div>

      <div className="hidden min-[400px]:grid grid-cols-2 gap-3 min-[1125px]:grid-cols-1">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight.id} {...highlight} />
        ))}
      </div>
    </section>
  );
};
