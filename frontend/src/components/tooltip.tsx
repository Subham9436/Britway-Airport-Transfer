import React from "react";
import type { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children?: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1 mb-2 hidden group-hover:block z-50 w-max max-w-xs">
        <div className="bg-red-700 text-white text-sm font-medium rounded-md px-4 py-2 shadow-lg relative break-words">
          {text}
          {/* Arrow */}
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-red-700"></div>
        </div>
      </div>
    </div>
  );
};
