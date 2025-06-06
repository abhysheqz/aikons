import React from "react";
const GoBackwardSec_60: React.FC<
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
        d="m12 5-2-2.8q.97-.198 2-.2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 12.5v-2a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1m-3.5 2v2a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm6-2v4a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1"
      />
    </svg>
  );
};
export default GoBackwardSec_60;
