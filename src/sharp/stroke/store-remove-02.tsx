import React from "react";
const StoreRemove_02: React.FC<
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
        d="M3 10.5V21h10.5M21 10.5v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 11.5a3 3 0 0 0 3-3c0 2 2.136 3 4 3s4-1 4-3a3 3 0 1 0 6 0l-2-4V2H4v2.5l-2 4a3 3 0 0 0 3 3ZM6 17h5M16 16l3 3m0 0 3 3m-3-3-3 3m3-3 3-3"
      />
    </svg>
  );
};
export default StoreRemove_02;
