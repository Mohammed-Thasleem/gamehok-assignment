import { AppLayout } from "@/components/layout/AppLayout";

import { useMountLoading } from "@/hooks/useMountLoading";
import { SocialStarBanner } from "@/components/home/SocialStarBanner";
import { FeaturedTournaments } from "@/components/home/FeaturedTournaments";
import { BouncyBirdBanner } from "@/components/home/BouncyBirdBanner";
import { GamesGrid } from "@/components/home/GamesGrid";
import { BattlesSection } from "@/components/home/BattlesSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { HomeSkeleton } from "@/components/Skeleton";

const Home = () => {
  const loading = useMountLoading(900);

  return (
    <AppLayout>
      {loading ? (
        <HomeSkeleton />
      ) : (
        <div className="px-4 lg:px-8">
          {/* Mobile: single column. Desktop: 2-col with highlights sidebar */}
          <div className="min-[1125px]:grid min-[1125px]:grid-cols-[1fr_320px] min-[1125px]:gap-8">
            <div className="space-y-5 min-[1125px]:space-y-7 min-w-0 py-2 min-[1125px]:py-4">
              <SocialStarBanner />
              <FeaturedTournaments />
              <BouncyBirdBanner />
              <GamesGrid />
              <BattlesSection />
              {/* highlights inline on mobile only */}
              <div className="min-[1125px]:hidden pb-20">
                <HighlightsSection />
              </div>
            </div>
            <aside className="hidden min-[1125px]:block py-2 min-[1125px]:py-4 pl-4 min-[1125px]:pl-8 border-l border-sidebar-border">
              <HighlightsSection />
            </aside>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default Home;
