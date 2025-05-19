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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20h4m-4-4h4m-4-4h4M17 20h4m-4-4h4m-4-4h4m-4-4h4M3 20h4m-4-4h4m-4-4h4M3 8h4M3 4h4"
      />
    </svg>
  );
};
export default ChartColumn;
