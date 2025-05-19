import React from "react";
const GoBackwardSec_15: React.FC<
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
        d="M9.5 16v-6L8 11m7.5-1h-3l-.5 2.5s1-.5 2-.5c1.07-.017 2 .873 2 2 0 1.09-1 2-1.973 2C13 16 12.5 15.5 12 15"
      />
    </svg>
  );
};
export default GoBackwardSec_15;
