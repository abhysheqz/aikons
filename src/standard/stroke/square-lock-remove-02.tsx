import React from "react";
const SquareLockRemove_02: React.FC<
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
        d="M15.5 9V6.5a4.5 4.5 0 1 0-9 0V9M19 11.5V11a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2l.001 9a2 2 0 0 0 2 2H10.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 17 .998 1m0 0L18 19m-1.002-1L18 17m-1.002 1L16 19m5-1a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default SquareLockRemove_02;
