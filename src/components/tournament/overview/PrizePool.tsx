import type { Tournament } from "@/types/tournament";
import coinIcon from "@/assets/coins.png";

interface PrizePoolProps {
  tournament: Tournament;
}

export const PrizePool = ({ tournament }: PrizePoolProps) => {
  return (
    <section>
      <h3 className="mb-3 text-start font-display text-lg font-bold">
        Prize Pool
      </h3>

      <div className="overflow-hidden rounded-xl border border-border gradient-card">
        <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-3">
          <span className="text-sm font-semibold">Total Tournament Prize</span>

          <div className="flex items-center gap-1.5">
            {tournament.prizePool}
            <img src={coinIcon} alt="Coins" className="size-4 object-contain" />
          </div>
        </div>

        {tournament.prizes.map((prize) => (
          <div
            key={prize.place}
            className="flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0"
          >
            <span className="text-sm">{prize.place}</span>

            <div className="flex items-center gap-1.5">
              {prize.amount}
              <img
                src={coinIcon}
                alt="Coins"
                className="size-4 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
