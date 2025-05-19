import React from "react";
const MarketAnalysis: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 6h-4v12h4zM21 5h-4v6h4zM7 10H3v6h4zM12 21v-3M19 13v-2M12 6V3M19 5V3M5 18v-2M5 10V8"
      />
    </svg>
  );
};
export default MarketAnalysis;
