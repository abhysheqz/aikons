import React from "react";
const ChartDecrease: React.FC<
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
        d="M21 21H3V3M7 6c3.5 0 10.5 1.5 10.5 11m0 0L15 15m2.5 2 2-2.5"
      />
    </svg>
  );
};
export default ChartDecrease;
