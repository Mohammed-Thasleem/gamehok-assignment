import { Mail } from "lucide-react";
import type { Tournament } from "@/types/tournament";

interface OrganiserCardProps {
  tournament: Tournament;
}

export const OrganiserCard = ({ tournament }: OrganiserCardProps) => {
  return (
    <section>
      <h3 className="mb-3 text-start font-display text-lg font-bold">
        Organiser
      </h3>

      <div className="flex flex-col items-start rounded-xl border border-border gradient-card">
        <p className="px-3 py-3 text-sm">Organiser's details and contact</p>

        <div className="flex w-full flex-col items-start rounded-b-xl bg-black px-3 py-5">
          <p className="font-semibold">{tournament.organiser}</p>

          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <Mail size={16} />
            <p className="text-sm">support@gsesports.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
