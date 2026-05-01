import { AppLayout } from "@/components/layout/AppLayout";
import type { LucideIcon } from "lucide-react";

export const StubPage = ({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}) => (
  <AppLayout>
    <div className="px-4 lg:px-8 py-8 min-h-[60vh] flex flex-col items-center justify-center text-center animate-fade-up">
      <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
        <Icon className="size-7 text-primary" />
      </div>
      <h1 className="font-display font-bold text-2xl lg:text-3xl">{title}</h1>
      <p className="text-sm text-muted-foreground mt-2 max-w-sm">{subtitle}</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="gradient-card border border-border rounded-xl h-24 shimmer opacity-30"
          />
        ))}
      </div>
    </div>
  </AppLayout>
);
