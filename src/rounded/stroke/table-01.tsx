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
        d="M20 10s2.375 1.822 1.375 4.667 0 4.74.625 5.333m-2-10H4m16 0V4M4 10s-2.375 1.822-1.375 4.667 0 4.74-.625 5.333m2-10V4m18 0h-2M2 4h2m0 0h16M11 7h2"
      />
    </svg>
  );
};
export default Table_01;
