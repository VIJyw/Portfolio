import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-200",
          hover && "hover:shadow-md hover:scale-[1.02]",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export default Card;
