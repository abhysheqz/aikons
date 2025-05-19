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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 10h-17a6 6 0 0 1 6-6h5a6 6 0 0 1 6 6M4 16h-.5a1.5 1.5 0 0 1 0-3H12l2 2 2-2h4.5a1.5 1.5 0 0 1 0 3H20M4 16l.621 2.485A2 2 0 0 0 6.561 20h10.877a2 2 0 0 0 1.94-1.515L20 16M4 16h6.5m9.5 0h-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.009 7H15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 6.5-1 1"
      />
    </svg>
  );
};
export default Hamburger_01;
