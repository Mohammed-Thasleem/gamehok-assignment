import { Calendar, Clock, Medal, Users2 } from "lucide-react";
import { MoreTournaments } from "../MoreTournaments";
import type { Tournament } from "@/types/tournament";
import coinIcon from "@/assets/coins.png";

interface OverviewTabProps {
  tournament: Tournament;
}

const DetailItem = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="flex gap-2.5">
    <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  </div>
);

export const OverviewTab = ({ tournament }: OverviewTabProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="min-w-0 space-y-6">
        <section>
          <h3 className="mb-3 font-display text-lg font-bold">Details</h3>

          <div className="grid grid-cols-2 gap-4 rounded-xl border border-border gradient-card p-4 lg:gap-6">
            <DetailItem
              label="TEAM SIZE"
              value={tournament.teamSize}
              icon={<Users2 className="size-4 text-primary" />}
            />
            <DetailItem
              label="TOURNAMENT STARTS"
              value={tournament.startsAt}
              icon={<Calendar className="size-4 text-primary" />}
            />
            <DetailItem
              label="FORMAT"
              value={tournament.format}
              icon={<Medal className="size-4 text-primary" />}
            />
            <DetailItem
              label="CHECK-IN"
              value={tournament.checkIn}
              icon={<Clock className="size-4 text-primary" />}
            />
          </div>
        </section>

        <section>
          <h3 className="mb-3 font-display text-lg font-bold">
            Rounds and Schedule
          </h3>

          <div className="space-y-2.5">
            {tournament.rounds.map((round) => (
              <div
                key={round.round}
                className="rounded-xl border border-border gradient-card p-3.5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">
                    {round.name}{" "}
                    <span className="font-normal text-muted-foreground">
                      ({round.round})
                    </span>
                  </p>

                  <span className="rounded-md border border-purple/40 bg-purple/20 px-2 py-0.5 text-[10px] font-semibold">
                    {round.format}
                  </span>
                </div>

                <div className="mt-1.5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{round.advance}</span>
                  <span>{round.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 font-display text-lg font-bold">
            How to Join a Match
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {tournament.howToJoin.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </section>

        <MoreTournaments />
      </div>

      <aside className="space-y-6">
        <section>
          <h3 className="mb-3 font-display text-lg font-bold">Prize Pool</h3>

          <div className="overflow-hidden rounded-xl border border-border gradient-card">
            <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-3">
              <span className="text-sm font-semibold">
                Total Tournament Prize
              </span>
              <div className="flex items-center gap-1.5">
                {tournament.prizePool}{" "}
                <img
                  src={coinIcon}
                  alt="Coins"
                  className="size-4 object-contain"
                />
              </div>
            </div>

            {tournament.prizes.map((prize) => (
              <div
                key={prize.place}
                className="flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0"
              >
                <span className="text-sm">{prize.place}</span>
                <div className="flex items-center gap-1.5">
                  {prize.amount}{" "}
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

        <section>
          <h3 className="mb-3 font-display text-lg font-bold">Organiser</h3>

          <div className="rounded-xl border border-border gradient-card p-4">
            <p className="mb-2 text-xs text-muted-foreground">
              Organiser's details and contact
            </p>
            <p className="font-semibold">{tournament.organiser}</p>
            <p className="text-xs text-muted-foreground">
              support@gsesports.com
            </p>
          </div>
        </section>
      </aside>
    </div>
  );
};
