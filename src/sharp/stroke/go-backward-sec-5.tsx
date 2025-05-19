import React from "react";
const GoBackwardSec_5: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 10h-3.5l-.5 2.5c.694-.165 1.355-.357 2.071-.357a1.929 1.929 0 1 1 0 3.857c-.827 0-1.808.017-2.04-1"
      />
    </svg>
  );
};
export default GoBackwardSec_5;
