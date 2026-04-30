import type { TournamentTabKey } from "@/types/tabs";

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
    <div className="mt-5 flex overflow-x-auto rounded-xl border border-border bg-surface p-1 scrollbar-hide">
      {TABS.map(({ key, label }) => {
        const isActive = activeTab === key;

        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`relative min-w-[90px] flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-colors lg:text-sm ${
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
            <span
              className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
                isActive ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
