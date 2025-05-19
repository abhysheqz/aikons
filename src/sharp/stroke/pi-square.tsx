import React from "react";
const PiSquare: React.FC<
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
        d="M17 8h-6.778C8.995 8 8 8.895 8 10m3.333-2-.96 6.909c-.082.6-.696 1.02-1.36.935-.45-.057-.826-.34-.97-.728L8 15m5.667 1 1.11-8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21h18V3H3z"
      />
    </svg>
  );
};
export default PiSquare;
