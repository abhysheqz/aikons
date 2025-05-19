import React from "react";
const PropertyAdd: React.FC<
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
        d="M21 12.028V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h7.028M2 7h19M11 16h1.5M7 16h1m3-4h5m-9 0h1M15 18.5h7M18.5 22v-7"
      />
    </svg>
  );
};
export default PropertyAdd;
