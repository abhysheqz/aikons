import React from "react";
const Sorting_9: React.FC<
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
        d="M8.5 10h-3M7 10V3h-.5l-1 1M9 17.5V14H5v3.5zm0 0V21H5M14 17l3 3 3-3M17 4v15.391"
      />
    </svg>
  );
};
export default Sorting_9;
