import React from "react";
const Bathtub_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M22 11h-9l-3-2H2" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 9v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 18v3M6 18v3M4 9V4.5a1.5 1.5 0 1 1 3 0V5"
      />
    </svg>
  );
};
export default Bathtub_02;
