import { Bell } from "lucide-react";
import { user } from "@/mockData/mock";
import coinIcon from "@/assets/coins.png";
import ticketIcon from "@/assets/two-tickets.png";
import avatarImg from "@/assets/profile-avatar.png";

export const TopBar = () => {
  return (
    <header className="hidden lg:flex items-center justify-end gap-4 px-8 py-4 sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-2 bg-primary rounded-full px-1.5 py-2">
        <div className="flex items-center gap-1.5 px-1.5 py-0 border-r border-foreground/30 pr-3">
          <img
            src={ticketIcon}
            alt="Tickets"
            className="size-4 object-contain"
          />
          <span className="text-sm">{user.tickets}</span>
        </div>
        <div className="flex items-center gap-1.5 px-1.5 py-0 ">
          <img src={coinIcon} alt="Coins" className="size-4 object-contain" />
          <span className="text-sm">{user.coins}</span>
        </div>
      </div>
      <div className="flex items-center justify-center border-r border-foreground pr-4 py-1">
        <Bell className="size-6" />
      </div>
      <div className="flex items-center gap-2">
        <div className="size-9 rounded-full bg-foreground/90 flex items-center justify-center text-sm font-bold">
          <img src={avatarImg} alt="Avatar" className="size-7 object-contain" />
        </div>
        <span className="text-sm font-medium">{user.name}</span>
      </div>
    </header>
  );
};
