import React from "react";
const PackageSearch: React.FC<
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
        d="M13.75 18.015a4.265 4.265 0 1 1 7.865 2.288l1.135 1.136-1.311 1.311-1.136-1.136a4.265 4.265 0 0 1-6.553-3.6m4.265-2.41a2.41 2.41 0 1 0 0 4.82 2.41 2.41 0 0 0 0-4.82"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.015 12.25a5.765 5.765 0 0 0-4.45 9.431l-2.26 1.005a.75.75 0 0 1-.61 0L1.25 18.488V6a.95.95 0 0 1 .579-.868l8.775-3.8c.252-.109.54-.109.792 0l8.775 3.8A.95.95 0 0 1 20.75 6v6.94a5.74 5.74 0 0 0-2.735-.69M4.625 6l1.987.86 6.375-2.76L11 3.24zm10.762-.86L9.013 7.9 11 8.76 17.374 6zM7.5 14 5 12.5V11l2.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageSearch;
