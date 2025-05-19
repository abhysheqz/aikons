import React from "react";
const Cash_02: React.FC<
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
        d="M14.5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 2.5c2.763 0 4.572.477 5.426.772.358.124.574.467.574.846v10.873c0 .744-.811 1.289-1.533 1.11-1-.247-2.489-.492-4.467-.492-4.837 0-5.93 1.872-13.24.183A.986.986 0 0 1 2 14.83V3.78c0-.65.615-1.126 1.25-.988C10.122 4.287 11.274 2.5 16 2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 6.5c1.951 0 3.705-1.595 3.929-3.246M18.5 3c0 2.04 1.765 3.969 3.5 3.969m0 5.531c-1.9 0-3.74 1.31-3.898 3.098M6 15.996a4 4 0 0 0-4-4M19 18.733a18.5 18.5 0 0 0-3-.233c-4.294 0-5.638 1.66-11 .703"
      />
    </svg>
  );
};
export default Cash_02;
