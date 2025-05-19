import React from "react";
const Mp3_01: React.FC<
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
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M16.5 17v-1H20v3m-3.5 2v1H20v-3m0 0h-1.451M4 22v-6h.164L6 19l1.84-3H8v6m2.5 0v-2.5m0 0V16h1.75a1.75 1.75 0 1 1 0 3.5z"
      />
    </svg>
  );
};
export default Mp3_01;
