import birdImg from "@/assets/bouncing-bird.png";
import playButtonImg from "@/assets/play-btn.png";

export const BouncyBirdBanner = () => {
  return (
    <section className="min-[600px]:hidden flex items-center justify-between overflow-hidden rounded-2xl border border-border p-4 bg-bouncy-banner">
      <div className="flex flex-col gap-2 text-left">
        <p className="text-xl text-blue font-bold">Introducing</p>
        <h3 className="font-irish text-bouncy-text text-xl tracking-tight lg:text-2xl">
          BOUNCY BIRD
        </h3>
        <p className="text-xs text-purple lg:text-sm">A game for everyone</p>
        <p className="text-primary-inverted mt-0.5 text-sm ">
          Play daily, win weekly 🪙
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <img
          src={birdImg}
          alt="Bouncy Bird"
          className=" object-contain mt-[-20px]"
        />
        <button>
          <img
            src={playButtonImg}
            alt="Play Now"
            className="h-10 w-auto object-contain lg:h-11"
          />
        </button>
      </div>
    </section>
  );
};
