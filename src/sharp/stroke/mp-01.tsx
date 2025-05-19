import React from "react";
const Mp_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M4 22v-6h.167L6 19l1.82-3H8v6m2.5 0v-2.5m0 0V16h1.75a1.75 1.75 0 1 1 0 3.5zm6-3.5v3H20m0 0v-3m0 3v2.5"
      />
    </svg>
  );
};
export default Mp_01;
