import socialStar from "@/assets/star.png";
import { socialMetrics } from "@/mockData/home";

export const SocialStarBanner = () => {
  return (
    <section className="flex flex-row-reverse sm:flex-row items-center justify-between rounded-[8px] p-3 min-[500px]:p-5 lg:p-7 gradient-social-banner">
      <div className="flex flex-col justify-between max-w-[60%] text-left">
        <h2 className="font-display text-xl font-bold leading-tight lg:text-2xl">
          Be the Gamehok's <span className="text-gold">Social Star</span>
        </h2>

        <p className="mt-2 md:mt-3.5 text-xs font-semibold text-foreground lg:text-sm">
          Earn rewards by levelling up your social game
        </p>

        <div className="mt-3 md:mt-6 flex items-center gap-3 md:gap-4 lg:gap-7">
          {socialMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center gap-1"
            >
              <img
                src={metric.icon}
                alt={metric.label}
                className="size-7 object-contain md:size-8 lg:size-11"
              />

              <span className="text-[10px] text-foreground lg:text-xs">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <img
        src={socialStar}
        alt="Social Star Reward"
        className="size-28 sm:size-30 lg:size-40 object-contain"
      />
    </section>
  );
};
