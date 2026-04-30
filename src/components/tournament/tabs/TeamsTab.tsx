import type { Tournament } from "@/components/tournament/tournament.types";

interface TeamsTabProps {
  tournament: Tournament;
}

export const TeamsTab = ({ tournament }: TeamsTabProps) => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 py-3">
      {tournament.teams.map((team) => (
        <div key={team.id} className="rounded-xl border p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg gradient-purple font-bold">
              {team.name[6] ?? "T"}
            </div>
            <div>
              <p className="font-semibold">{team.name}</p>
              <p className="text-xs text-muted-foreground">
                {team.members} members
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
