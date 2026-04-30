import { NavLink } from "react-router-dom";
import { navItems } from "../../config/navigation";

export const MobileBottomNav = () => (
  <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-lg border-t border-border pb-[env(safe-area-inset-bottom)]">
    <div className="grid grid-cols-4">
      {navItems.map((item) => {
        const Icon = item.icon;

        if (item.disabled) {
          return (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 py-2.5 text-[10px] text-muted-foreground transition-all duration-300"
            >
              <Icon className="size-5" />
              <span className="font-medium">{item.label}</span>
            </div>
          );
        }

        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 py-2.5 text-[10px] transition-all duration-300 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            <Icon className="size-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        );
      })}
    </div>
  </nav>
);
