import React from "react";
import { cn } from "../../lib/utils";

export const Circle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-zinc-900 size-[240px] rounded-full inline-flex items-center justify-center outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
        className
      )}
    >
      {children}
    </div>
  );
};
