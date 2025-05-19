import React from "react";
const ChartHistogram: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21H3V3M13 10v11M18 13v8M8 13v8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 7.987h7A2.99 2.99 0 0 1 12.993 5 3.006 3.006 0 0 1 16 8l5-.013"
      />
    </svg>
  );
};
export default ChartHistogram;
