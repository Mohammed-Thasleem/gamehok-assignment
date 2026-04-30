import type { Tournament } from "@/components/tournament/tournament.types";

interface RulesTabProps {
  tournament: Tournament;
}

export const RulesTab = ({ tournament }: RulesTabProps) => {
  return (
    <div className="rounded-xl border border-border mt-5 p-5 lg:p-6">
      <ol className="space-y-3 text-sm">
        {tournament.rules.map((rule, index) => (
          <li key={index} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              {index + 1}
            </span>
            <span className="text-start text-muted-foreground">{rule}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
