import React from "react";
const ChartColumn: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 20h3m-3-4h3m-3-4h3M17 20h3m-3-4h3m-3-4h3m-3-4h3M4 20h3m-3-4h3m-3-4h3M4 8h3M4 4h3"
      />
    </svg>
  );
};
export default ChartColumn;
