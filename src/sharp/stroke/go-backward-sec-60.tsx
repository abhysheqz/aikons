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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 5-2-2.8q.97-.198 2-.2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.99 9.99 0 0 1 4-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.51 11.091v-1.04a.1.1 0 0 0-.1-.1H6.985v3.048m0 0h3.427a.1.1 0 0 1 .1.1v2.85a.1.1 0 0 1-.1.1H6.984zm6.568 3.05h3.345a.1.1 0 0 0 .1-.1V10.05a.1.1 0 0 0-.1-.1h-3.345a.1.1 0 0 0-.1.1v5.899a.1.1 0 0 0 .1.1Z"
      />
    </svg>
  );
};
export default GoBackwardSec_60;
