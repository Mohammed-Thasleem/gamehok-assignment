import type { TournamentTabKey } from "@/components/tournament/tabs/tabs.types";

const TABS: { key: TournamentTabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "teams", label: "Teams" },
  { key: "lobbies", label: "Lobbies" },
  { key: "rules", label: "Rules" },
];

interface TournamentTabsProps {
  activeTab: TournamentTabKey;
  onChange: (tab: TournamentTabKey) => void;
}

export const TournamentTabs = ({
  activeTab,
  onChange,
}: TournamentTabsProps) => {
  return (
    <div className="mt-4 flex overflow-x-auto border-b-2 border-b-gray bg-surface py-1 scrollbar-hide">
      {TABS.map(({ key, label }) => {
        const isActive = activeTab === key;

        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`relative min-w-[90px] max-w-[136px] min-h-[42px] flex-1  px-3 py-2 text-xs font-semibold transition-colors lg:text-sm ${
              isActive
                ? "text-primary bg-primary-inverted/50 rounded-t-md "
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
            <span
              className={`w-full absolute bottom-[-3px] left-0 right-0 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
                isActive ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
