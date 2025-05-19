import React from "react";
const Store_04: React.FC<
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
        d="M3 11v10.5h18V11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5 11.5a3 3 0 0 0 3-3c0 2 2.136 3 4 3s4-1 4-3a3 3 0 1 0 6 0L20 5V2.5H4V5L2 8.5a3 3 0 0 0 3 3ZM6 18h5"
      />
    </svg>
  );
};
export default Store_04;
