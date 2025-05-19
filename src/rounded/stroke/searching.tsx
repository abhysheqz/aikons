import React from "react";
const Searching: React.FC<
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
        d="M16.5 17.5 20 21M18 13a6 6 0 1 0-12 0 6 6 0 0 0 12 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.765 9a2 2 0 0 0 1.083-1.082C21 7.55 21 6.932 21 6s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 3 18.932 3 18 3H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 4.602 3 5.068 3 6s0 1.55.152 1.918A2 2 0 0 0 4.235 9"
      />
    </svg>
  );
};
export default Searching;
