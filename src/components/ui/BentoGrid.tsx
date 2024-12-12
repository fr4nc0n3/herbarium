import React from "react";
import { cn } from "../../../lib/utils";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 md:auto-rows-[20rem] gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoGrid;
