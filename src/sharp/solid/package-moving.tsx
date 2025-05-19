import React from "react";
const PackageMoving: React.FC<
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
        d="M5.25 13.75h-4v-2h4zM5.25 16.75h-4v-2h4zM5.25 19.75h-4v-2h4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 6a.95.95 0 0 1 .579-.868l8.775-3.8c.252-.11.54-.11.792 0l8.775 3.8A.95.95 0 0 1 22.75 6v12.487l-9.445 4.198a.75.75 0 0 1-.61 0L6.75 20.043V10.25h-3.5zm3.376 0 1.986.86 6.375-2.76L13 3.24zm10.761-.86L11.013 7.9 13 8.76 19.374 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageMoving;
