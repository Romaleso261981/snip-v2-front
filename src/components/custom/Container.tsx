import { cn } from "@/utils/common";
import React from "react";

export default function Container({
  className,
  children
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("h-full w-full my-4 md:mb-0", className)}>
      {children}
    </div>
  );
}
