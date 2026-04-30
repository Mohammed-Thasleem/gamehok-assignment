interface SectionTitleProps {
  title: string;
  showViewAll?: boolean;
}

export const SectionTitle = ({
  title,
  showViewAll = true,
}: SectionTitleProps) => {
  return (
    <div className="mb-3 lg:mb-4 flex items-center justify-between">
      <h2 className="font-display text-lg sm:text-xl font-bold md:text-2xl">
        {title}
      </h2>
      {showViewAll && (
        <p className="text-xs font-semibold uppercase tracking-wider text-primary hover:opacity-80 lg:text-sm">
          View All
        </p>
      )}
    </div>
  );
};
