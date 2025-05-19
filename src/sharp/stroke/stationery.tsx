import React from "react";
const Stationery: React.FC<
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
        d="M11 20.998h10V3H11z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 16.499h3m-3-4.5h3m-3-4.5h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 7.5H3M3.059 3.044V18.99l1.925 2.014 1.973-2.014.119-15.945a.01.01 0 0 0-.01-.01H3.069a.01.01 0 0 0-.01.01Z"
      />
    </svg>
  );
};
export default Stationery;
