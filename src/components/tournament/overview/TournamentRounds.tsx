import type { Tournament } from "@/components/tournament/tournament.types";

interface TournamentRoundsProps {
  tournament: Tournament;
}

export const TournamentRounds = ({ tournament }: TournamentRoundsProps) => {
  return (
    <section>
      <h3 className="mb-3 text-start font-display text-lg font-bold">
        Rounds and Schedule
      </h3>

      <div className="space-y-2.5">
        {tournament.rounds.map((round) => (
          <div key={round.round} className="border-b border-border pb-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                {round.name}{" "}
                <span className="font-normal text-muted-foreground">
                  ({round.round})
                </span>
              </p>

              <span className="rounded-[8px] gradient-purple px-2 py-1 text-xs font-semibold">
                {round.format}
              </span>
            </div>

            <div className="mt-1.5 flex items-center justify-between text-xs font-semibold text-foreground">
              <span>{round.advance}</span>
              <span>{round.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
