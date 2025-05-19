import React from "react";
const CursorPointer_01: React.FC<
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
        d="M13.136 22 9 9l13 4.136-4.434 2.68 4.139 4.116-1.781 1.78-4.128-4.127z"
      />
      <path
        fill="currentColor"
        d="m10.858 7.083.387.643 1.285-.774-.388-.643zm-4.549 5.06.643.386.774-1.284-.643-.387zM5.75 8.5A2.75 2.75 0 0 1 8.5 5.75v-1.5A4.25 4.25 0 0 0 4.25 8.5zM8.5 5.75c1 0 1.875.533 2.358 1.333l1.284-.774A4.25 4.25 0 0 0 8.5 4.25zm-1.417 5.108A2.75 2.75 0 0 1 5.75 8.5h-1.5c0 1.547.827 2.9 2.06 3.642z"
      />
      <path
        fill="currentColor"
        d="m14.252 8.135.047.748 1.497-.095-.047-.748zm-6.21 7.614.748.047.095-1.497-.749-.047zM2.75 8.506A5.757 5.757 0 0 1 8.507 2.75v-1.5A7.257 7.257 0 0 0 1.25 8.507zM8.507 2.75a5.757 5.757 0 0 1 5.745 5.385l1.496-.095a7.257 7.257 0 0 0-7.241-6.79zm-.37 11.502A5.757 5.757 0 0 1 2.75 8.506h-1.5c0 3.851 3 7.001 6.791 7.242z"
      />
    </svg>
  );
};
export default CursorPointer_01;
