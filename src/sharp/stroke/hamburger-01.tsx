import React from "react";
const Hamburger_01: React.FC<
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
        strokeWidth={1.5}
        d="M20.5 10h-17a6 6 0 0 1 6-6h5a6 6 0 0 1 6 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16h-.5a1.5 1.5 0 0 1 0-3H12l2 2 2-2h4.5a1.5 1.5 0 0 1 0 3H20M4 16l1 4h14l1-4M4 16h7m9 0h-2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.008 7h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 6.5 9 7.5"
      />
    </svg>
  );
};
export default Hamburger_01;
