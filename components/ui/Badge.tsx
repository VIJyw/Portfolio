import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "info";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
          {
            "bg-secondary text-foreground": variant === "default",
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":
              variant === "success",
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200":
              variant === "warning",
            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200":
              variant === "info",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
