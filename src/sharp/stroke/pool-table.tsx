import React from "react";
const PoolTable: React.FC<
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
        d="M22 3H2v14h20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.012 9H12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 14a3 3 0 0 1 3 3M2 6a3 3 0 0 0 3-3M22 14a3 3 0 0 0-3 3m3-11a3 3 0 0 1-3-3M14 17a2 2 0 1 0-4 0m4-14a2 2 0 1 1-4 0M10.5 11.5 4 21"
      />
    </svg>
  );
};
export default PoolTable;
