import { Bell, Menu } from "lucide-react";
import coinIcon from "@/assets/coins.png";
import avatarImg from "@/assets/profile-avatar.png";
import { user } from "@/mockData/mock";

export const MobileTopBar = () => {
  return (
    <header className="lg:hidden flex items-center justify-between px-4 py-3 sticky top-0 z-30 bg-background/90 backdrop-blur-md">
      <div className="relative">
        <div className="size-10 rounded-full bg-foreground/90 flex items-center justify-center">
          <img src={avatarImg} alt="Avatar" className="size-7 object-contain" />
        </div>

        <button className="absolute -right-1 top-7 flex size-4 -translate-y-1/2 items-center justify-center rounded-full border-background bg-primary">
          <Menu className="size-2.5" />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 bg-primary px-3 py-1.5 rounded-full">
          <img src={coinIcon} alt="Coins" className="size-4 object-contain" />
          <span className="text-xs">{user.coins}</span>
        </div>
        <Bell className="size-6" />
      </div>
    </header>
  );
};
