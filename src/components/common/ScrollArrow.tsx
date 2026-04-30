import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollArrowProps {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
  className?: string;
  iconSize?: string;
}

export const ScrollArrow = ({
  direction,
  disabled,
  onClick,
  className = "",
  iconSize = "size-4",
}: ScrollArrowProps) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-primary transition-opacity ${
        direction === "left" ? "-left-2" : "-right-2"
      } ${
        disabled ? "opacity-35 cursor-not-allowed" : "opacity-100"
      } ${className}`}
    >
      <Icon className={iconSize} />
    </button>
  );
};
