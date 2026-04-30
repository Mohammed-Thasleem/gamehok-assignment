import type { Tournament } from "@/types/tournament";

interface HowToJoinProps {
  tournament: Tournament;
}

export const HowToJoin = ({ tournament }: HowToJoinProps) => {
  return (
    <section className="flex flex-col items-start">
      <h3 className="mb-3 font-display text-lg font-bold">
        How to Join a Match
      </h3>

      <ul className="list-disc space-y-2 pl-3 text-sm text-muted-foreground">
        {tournament.howToJoin.map((step, index) => (
          <li key={index} className="text-start">
            {step}
          </li>
        ))}
      </ul>
    </section>
  );
};
