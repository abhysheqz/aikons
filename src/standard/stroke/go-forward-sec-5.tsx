import React from "react";
const GoForwardSec_5: React.FC<
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
        d="M13.5 10h-3l-.5 2.5s1-.5 2-.5c1.07-.017 2 .873 2 2 0 1.09-1 2-1.973 2C11 16 10.5 15.5 10 15"
      />
    </svg>
  );
};
export default GoForwardSec_5;
