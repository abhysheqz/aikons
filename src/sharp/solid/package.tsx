import React from "react";
const Package: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M2.829 5.132A.95.95 0 0 0 2.25 6v12.487l9.445 4.198a.75.75 0 0 0 .61 0l9.445-4.198V6a.95.95 0 0 0-.579-.868l-8.775-3.8a1 1 0 0 0-.792 0zM7.612 6.86 5.626 6 12 3.24l1.987.86zm2.401 1.04 6.374-2.76 1.987.86L12 8.76zM6 12.5 8.5 14v-1.5L6 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Package;
