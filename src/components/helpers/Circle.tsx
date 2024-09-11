import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const Circle = ({
  children,
  className,
  animate = false,
}: {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-zinc-900 size-[240px] rounded-full inline-flex items-center justify-center  relative",
        className
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
        className={cn(
          "absolute rounded-full inset-0 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-transparent",
          animate && "border-t-fuchsia-500/30"
        )}
      ></motion.div>
      {children}
    </div>
  );
};
