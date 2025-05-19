import React from "react";
const Table_01: React.FC<
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
        d="M4 10s-2.5 1.656-1.5 4.5.125 4.907-.5 5.5m2-10V4m0 6h16M4 4H2m2 0h16m0 6s2.5 1.656 1.5 4.5-.125 4.907.5 5.5m-2-10V4m0 0h2M10.5 7h3"
      />
    </svg>
  );
};
export default Table_01;
