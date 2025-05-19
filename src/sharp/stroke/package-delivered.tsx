import React from "react";
const PackageDelivered: React.FC<
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
        d="m15 19 1.75 2L22 15M2.004 6.03v12.015l8.855 3.946A.1.1 0 0 0 11 21.9V10.005M20 6v6.512"
      />
    </svg>
  );
};
export default PackageDelivered;
