import React from "react";
const PackageProcess: React.FC<
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
        d="M18 11.75a6.25 6.25 0 0 0-4.896 10.136l-1.8.8a.75.75 0 0 1-.609 0L1.25 18.486V6a.95.95 0 0 1 .579-.868l8.775-3.8c.252-.11.54-.11.792 0l8.775 3.8A.95.95 0 0 1 20.75 6v6.386A6.2 6.2 0 0 0 18 11.75M4.626 6l1.986.86 6.375-2.76L11 3.24zm10.761-.86L9.013 7.9 11 8.76 17.374 6zM7.5 14 5 12.5V11l2.5 1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.207 5.957 2-2-1.414-1.414-2 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageProcess;
