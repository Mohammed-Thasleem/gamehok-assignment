import { LobbyCard } from "@/components/cards/LobbyCard";
import type { Tournament } from "@/components/tournament/tournament.types";

interface LobbiesTabProps {
  tournament: Tournament;
  round: number;
  onRoundChange: (round: number) => void;
}

export const LobbiesTab = ({
  tournament,
  round,
  onRoundChange,
}: LobbiesTabProps) => {
  const filteredLobbies = tournament.lobbies.filter(
    (lobby) => lobby.round === round,
  );

  return (
    <div className="py-3">
      <div className="mb-4 flex gap-2">
        {[1, 2, 3].map((roundNumber) => (
          <button
            key={roundNumber}
            onClick={() => onRoundChange(roundNumber)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
              round === roundNumber
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            Round {roundNumber}
          </button>
        ))}
      </div>

      <div className="grid gap-3 gap-x-15 lg:grid-cols-2">
        {filteredLobbies.map((lobby) => (
          <LobbyCard key={lobby.id} {...lobby} />
        ))}
      </div>
    </div>
  );
};
