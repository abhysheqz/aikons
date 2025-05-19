import React from "react";
const CursorPointer_02: React.FC<
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
        d="m9.5 9.5 12 4.667-5.333 2-2 5.333z"
      />
      <path
        fill="currentColor"
        d="m11.358 7.583.387.643 1.285-.774-.388-.643zm-4.549 5.06.643.386.774-1.284-.643-.387zM6.25 9A2.75 2.75 0 0 1 9 6.25v-1.5A4.25 4.25 0 0 0 4.75 9zM9 6.25c1 0 1.875.533 2.358 1.333l1.284-.774A4.25 4.25 0 0 0 9 4.75zm-1.417 5.108A2.75 2.75 0 0 1 6.25 9h-1.5c0 1.547.827 2.9 2.06 3.642z"
      />
      <path
        fill="currentColor"
        d="m14.752 8.635.047.748 1.497-.095-.047-.748zm-6.21 7.614.748.047.095-1.497-.749-.047zM3.25 9.006A5.757 5.757 0 0 1 9.007 3.25v-1.5A7.257 7.257 0 0 0 1.75 9.007zM9.007 3.25a5.757 5.757 0 0 1 5.745 5.385l1.496-.095a7.257 7.257 0 0 0-7.241-6.79zm-.37 11.502A5.757 5.757 0 0 1 3.25 9.006h-1.5c0 3.851 3 7.001 6.791 7.242z"
      />
    </svg>
  );
};
export default CursorPointer_02;
