import React from "react";
const StoreAdd_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 11.5a3 3 0 0 0 3-3c0 2 2.136 3 4 3s4-1 4-3a3 3 0 1 0 6 0L20 5V3.5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1V5L2 8.5a3 3 0 0 0 3 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 18h4M3.5 11.5v8a2 2 0 0 0 2 2H13m7.5-10v1M15.5 18.5h6m-3 3v-6"
      />
    </svg>
  );
};
export default StoreAdd_02;
