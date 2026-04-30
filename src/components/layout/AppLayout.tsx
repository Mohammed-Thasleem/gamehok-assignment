import type { ReactNode } from "react";
import { DesktopSidebar } from "./DestopSidebar";
import { TopBar } from "./TopBar";
import { MobileTopBar } from "./MobileTopBar";
import { MobileBottomNav } from "./MobileBottomNav";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-background">
      <DesktopSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <MobileTopBar />
        <main className="flex-1">{children}</main>
      </div>
      <MobileBottomNav />
    </div>
  );
};
