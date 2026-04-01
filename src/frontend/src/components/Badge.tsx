import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "light";
}

export function AppBadge({
  children,
  className,
  variant = "primary",
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-5 py-2 rounded-full font-display font-bold text-sm tracking-wide",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "light" && "bg-primary/15 text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
}
