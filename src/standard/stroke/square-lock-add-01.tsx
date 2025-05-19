import React from "react";
const SquareLockAdd_01: React.FC<
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
        strokeWidth={1.5}
        d="M15.5 9V6.5a4.5 4.5 0 1 0-9 0V9M19 12v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2l.001 9a2 2 0 0 0 2 2H11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 22v-7M14 18.5h7"
      />
    </svg>
  );
};
export default SquareLockAdd_01;
