import React from "react";
const PackageOutOfStock: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 6 21 8l-9 4-9-4 4.5-2M6 13.5l2 1M10 2l2 2m0 0 2 2m-2-2-2 2m2-2 2-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 8v9.99l8.971 4.001a.1.1 0 0 0 .082 0L21 18.007V8.015m-8.988 4.022v9.452"
      />
    </svg>
  );
};
export default PackageOutOfStock;
