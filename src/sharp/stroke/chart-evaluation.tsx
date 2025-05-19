import React from "react";
const ChartEvaluation: React.FC<
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
        d="M21 21H3V3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.705 9.333 12.5 15.5 9 13l-1.25 1.75M20 4l-1.854 3M3.5 20.5 6 17.2"
      />
    </svg>
  );
};
export default ChartEvaluation;
