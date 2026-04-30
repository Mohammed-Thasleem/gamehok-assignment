import { Calendar, Clock, Mail, Medal, Users2 } from "lucide-react";
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
    <div className="flex size-8 shrink-0 items-center justify-center">
      {icon}
    </div>
    <div className="flex flex-col items-start">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  </div>
);

export const OverviewTab = ({ tournament }: OverviewTabProps) => {
  return (
    <div className="grid gap-6  lg:grid-cols-[1fr_340px]">
      <div className="flex flex-col min-w-0 lg:pr-8 pr-0 lg:border-r-2 lg:border-r-grey space-y-6 py-3">
        <section>
          <h3 className="mb-3 text-start font-display text-lg font-bold">
            Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 rounded-xl lg:gap-6">
            <DetailItem
              label="TEAM SIZE"
              value={tournament.teamSize}
              icon={<Users2 className="size-6 text-primary" />}
            />
            <DetailItem
              label="TOURNAMENT STARTS"
              value={tournament.startsAt}
              icon={<Calendar className="size-6 text-primary" />}
            />
            <DetailItem
              label="FORMAT"
              value={tournament.format}
              icon={<Medal className="size-6 text-primary" />}
            />
            <DetailItem
              label="CHECK-IN"
              value={tournament.checkIn}
              icon={<Clock className="size-6 text-primary" />}
            />
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-start font-display text-lg font-bold">
            Rounds and Schedule
          </h3>

          <div className="space-y-2.5">
            {tournament.rounds.map((round) => (
              <div key={round.round} className="border-b-2 border-b-grey pb-2">
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

        <section className="flex flex-col items-start">
          <h3 className="mb-3 font-display text-lg font-bold">
            How to Join a Match
          </h3>
          <ul className="list-disc space-y-2 pl-3 text-sm text-muted-foreground">
            {tournament.howToJoin.map((step, index) => (
              <li className="text-start" key={index}>
                {step}
              </li>
            ))}
          </ul>
        </section>

        <MoreTournaments />
      </div>

      <aside className="space-y-6 py-3">
        <section>
          <h3 className="mb-3 text-start font-display text-lg font-bold">
            Prize Pool
          </h3>

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
          <h3 className="mb-3 text-start font-display bg- text-lg font-bold">
            Organiser
          </h3>

          <div className="flex flex-col gradient-card items-start rounded-xl border border-border">
            <p className="text-sm py-3 px-3">Organiser's details and contact</p>
            <div className="flex flex-col items-start bg-black w-full px-3 py-5  rounded-b-xl">
              <p className="font-semibold">{tournament.organiser}</p>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <Mail size="16" />{" "}
                <p className="text-sm">support@gsesports.com</p>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
};
