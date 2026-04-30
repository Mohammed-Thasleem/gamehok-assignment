import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { tournaments } from "@/mockData/mock";
import { useMountLoading } from "@/hooks/useMountLoading";
import { TournamentSkeleton } from "@/components/Skeleton";
import { RulesTab } from "@/components/tournament/tabs/RulesTab";
import { LobbiesTab } from "@/components/tournament/tabs/LobbiesTab";
import { TeamsTab } from "@/components/tournament/tabs/TeamsTab";
import { OverviewTab } from "@/components/tournament/tabs/OverviewTab";
import type { TournamentTabKey } from "@/components/tournament/tabs/tabs.types";
import { TournamentHero } from "@/components/tournament/TournamentHero";
import { TournamentTabs } from "@/components/tournament/TournamentTab";

const Tournament = () => {
  const { id } = useParams();
  const loading = useMountLoading(900);
  const [activeTab, setActiveTab] = useState<TournamentTabKey>("overview");
  const [round, setRound] = useState(1);

  const tournament = useMemo(
    () => tournaments.find((item) => item.id === id) ?? tournaments[0],
    [id],
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab tournament={tournament} />;
      case "teams":
        return <TeamsTab tournament={tournament} />;
      case "lobbies":
        return (
          <LobbiesTab
            tournament={tournament}
            round={round}
            onRoundChange={setRound}
          />
        );
      case "rules":
        return <RulesTab tournament={tournament} />;
      default:
        return null;
    }
  };

  return (
    <AppLayout>
      {loading ? (
        <TournamentSkeleton />
      ) : (
        <div className="px-8 py-6 pb-[10rem] lg:pb-[5rem] lg:px-8 lg:py-4">
          <TournamentHero tournament={tournament} activeTab={activeTab} />
          <TournamentTabs activeTab={activeTab} onChange={setActiveTab} />
          <div className="">{renderTabContent()}</div>
        </div>
      )}

      <div className="fixed bottom-14  bg-black py-6 inset-x-0 z-30 px-4 lg:bottom-0 lg:left-60 lg:px-8 shadow-[0px_-2px_4px_0px_#FFFFFF40]">
        <div className="mx-auto flex max-w-7xl lg:justify-end">
          <button className="w-full rounded-xl bg-primary py-2 text-sm font-bold tracking-wide text-primary-foreground lg:w-auto lg:px-10">
            JOIN TOURNAMENT
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Tournament;
