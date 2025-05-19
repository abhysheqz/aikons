import React from "react";
const PropertyDelete: React.FC<
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
        d="M21 12.028V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h7.028M2 7h19M11 16h1.5M7 16h1m3-4h5m-9 0h1M16 16l3 3m0 0 3 3m-3-3-3 3m3-3 3-3"
      />
    </svg>
  );
};
export default PropertyDelete;
