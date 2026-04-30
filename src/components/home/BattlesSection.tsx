import { battles } from "@/mockData/mock";
import { SectionTitle } from "@/components/common/SectionTitle";
import { BattleCard } from "@/components/cards/BattleCard";

export const BattlesSection = () => {
  return (
    <section>
      <SectionTitle title="Compete in Battles" />
      <div className="flex gap-4">
        {battles.map((battle) => (
          <BattleCard key={battle.id} {...battle} />
        ))}
      </div>
    </section>
  );
};
