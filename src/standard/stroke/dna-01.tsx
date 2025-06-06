import React from "react";
const Dna_01: React.FC<
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
        d="M8.5 22c.5-.5 1-1.5 1-4m-.833-2.666C7.334 10 8.334 9 8.667 8.667s1.333-1.333 6.667 0m-6.667 6.667c-5.333-1.334-6-.668-6.667-.001m6.667 0c5.333 1.334 6.333.333 6.666 0s1.334-1.333 0-6.666m6.667 0c-.667.667-1.333 1.333-6.666 0M15.333 2C15 2.5 14.5 3.5 14.5 6"
      />
    </svg>
  );
};
export default Dna_01;
