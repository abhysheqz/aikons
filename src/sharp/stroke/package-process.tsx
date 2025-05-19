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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11 10 9-4-9-4-9 4z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 4-9 4M5 12l2 1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17.5 18.5 2-2M22 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 6.008v12.019l8.87 3.96a.1.1 0 0 0 .141-.091V10.048M20 5.996v6.021"
      />
    </svg>
  );
};
export default PackageProcess;
