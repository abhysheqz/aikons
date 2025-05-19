import React from "react";
const PackageAdd: React.FC<
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
        d="M1.25 6a.95.95 0 0 1 .579-.868l8.775-3.8c.252-.11.54-.11.792 0l8.775 3.8A.95.95 0 0 1 20.75 6v6.75H17v2.5h-2.5v4.5H17v.404l-5.695 2.531a.75.75 0 0 1-.61 0L1.25 18.487zm3.376 0 1.986.86 6.375-2.76L11 3.24zm10.761-.86L9.013 7.9 11 8.76 17.374 6zM7.5 14 5 12.5V11l2.5 1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.25 18.5V21h-2v-2.5h-2.5v-2h2.5V14h2v2.5h2.5v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageAdd;
