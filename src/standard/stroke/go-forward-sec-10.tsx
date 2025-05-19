import React from "react";
const GoForwardSec_10: React.FC<
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
        d="m12 5 2-2.8q-.97-.198-2-.2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.99 9.99 0 0 0-4-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15.5v-6l-1.5 1m4.5 0v4a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H13a1 1 0 0 0-1 1"
      />
    </svg>
  );
};
export default GoForwardSec_10;
