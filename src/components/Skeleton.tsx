export const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`shimmer rounded-lg ${className}`} />
);

export const HomeSkeleton = () => (
  <div className="px-4 lg:px-8 py-4 space-y-6">
    <Skeleton className="h-32 lg:h-40 w-full" />
    <Skeleton className="h-6 w-48" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Skeleton className="h-44" />
      <Skeleton className="h-44 hidden lg:block" />
    </div>
    <Skeleton className="h-20" />
    <div className="grid grid-cols-3 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-24" />
      ))}
    </div>
  </div>
);

export const TournamentSkeleton = () => (
  <div className="px-4 lg:px-8 py-4 space-y-4">
    <Skeleton className="h-48 lg:h-64 w-full" />
    <Skeleton className="h-8 w-64" />
    <Skeleton className="h-10 w-full max-w-md" />
    <div className="grid lg:grid-cols-3 gap-4">
      <Skeleton className="lg:col-span-2 h-64" />
      <Skeleton className="h-64" />
    </div>
  </div>
);
