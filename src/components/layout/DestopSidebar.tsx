import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../config/navigation";
import gamehokLogo from "@/assets/gamehok-logo.svg";

export const DesktopSidebar = () => {
  return (
    <aside className="hidden lg:flex w-60 shrink-0 bg-sidebar border-r border-sidebar-border flex-col py-6 px-4 sticky top-0 h-screen">
      <div className="mb-7 px-2">
        <img
          src={gamehokLogo}
          alt="Gamehok"
          className="h-8 w-auto object-contain"
        />
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-[16px] transition-all duration-300 ${
                isActive
                  ? "bg-sidebar-accent text-foreground font-semibold glow-soft"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
              }`
            }
          >
            <Icon className="size-6" />
            {label}
          </NavLink>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-destructive hover:bg-sidebar-accent transition-colors">
        <LogOut className="size-4" />
        Logout
      </button>
    </aside>
  );
};
