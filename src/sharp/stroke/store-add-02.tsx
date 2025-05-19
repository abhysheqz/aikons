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
        d="M3 10.5V21h10m8-10.5V13"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 11.5a3 3 0 0 0 3-3c0 2 2.136 3 4 3s4-1 4-3a3 3 0 1 0 6 0l-2-4V2H4v2.5l-2 4a3 3 0 0 0 3 3ZM6 17h5M15 18.5h7M18.5 22v-7"
      />
    </svg>
  );
};
export default StoreAdd_02;
