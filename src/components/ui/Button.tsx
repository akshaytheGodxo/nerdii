import * as React from "react";
import { cn } from "@/lib/utils";
export default function Button({
  className,
  type,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn(
        "px-3 py-1 border-2 border-transparent hover:border-on-surface hover:shadow-hard-sm hover:bg-surface-low transition-none",
        className,
      )}
      {...props}
    ></button>
  );
}
