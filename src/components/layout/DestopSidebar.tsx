import { NavLink } from "react-router-dom";
import { navItems } from "../../config/navigation";
import gamehokLogo from "@/assets/gamehok-logo.svg";
import logoutIcon from "@/assets/icon-logout.svg";

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
        {navItems.map((item) => {
          const Icon = item.icon;
          if (item.disabled) {
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-[16px] text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground cursor-pointer transition-all duration-300"
              >
                <Icon className="size-6" />
                {item.label}
              </div>
            );
          }

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-sm text-[16px] transition-all duration-300 ${
                  isActive
                    ? "gradient-card text-foreground font-semibold"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
                }`
              }
            >
              <Icon className="size-6" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors">
        <img src={logoutIcon} alt="Logout" className="size-4 object-contain" />
        Logout
      </button>
    </aside>
  );
};
