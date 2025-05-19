import React from "react";
const SaleTag_01: React.FC<
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
        strokeWidth={1.5}
        d="M7 3.697C9.78 6.782 14.366.124 17.08 2.54 18.64 3.93 19.026 7 17 9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.444 11.555a1.44 1.44 0 0 0-2.033-.017c-.557.556-.585 1.142.16 1.886.746.744.83 1.404.11 2.123s-1.508.507-2.126-.11m3.89-3.882 1.054-1.055m-1.055 1.055c.384.383.511.925.379 1.408m-4.268 2.474L9.493 16.5m1.062-1.063a1.64 1.64 0 0 1-.491-1.291"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m18.017 6.792.946.22L20 12.993l-8.93 8.977a.1.1 0 0 1-.141 0l-6.9-6.876a.1.1 0 0 1 0-.142L12.98 6l2.508.437"
      />
    </svg>
  );
};
export default SaleTag_01;
