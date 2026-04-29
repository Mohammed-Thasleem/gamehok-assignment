import { NavLink } from "react-router-dom";
import { navItems } from "../../config/navigation";

export const MobileBottomNav = () => (
  <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-lg border-t border-border">
    <div className="grid grid-cols-4">
      {navItems.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-2.5 text-[10px] transition-all duration-300 relative ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`size-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-primary/15 shadow-[0_0_18px_hsl(150_100%_50%/0.55)]"
                    : ""
                }`}
              >
                <Icon className="size-5" />
              </div>
              <span className="font-medium">{label.split(" ")[0]}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
    <div className="h-[env(safe-area-inset-bottom)]" />
  </nav>
);
