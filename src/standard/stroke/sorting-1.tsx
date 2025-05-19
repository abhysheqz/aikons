import React from "react";
const Sorting_1: React.FC<
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
        d="M8.5 21h-3M7 21v-7h-.5l-1 1M9 6.5V3H5v3.5zm0 0V10H5M14 17l3 3 3-3M17 4v15.391"
      />
    </svg>
  );
};
export default Sorting_1;
