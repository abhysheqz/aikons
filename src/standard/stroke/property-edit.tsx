import React from "react";
const PropertyEdit: React.FC<
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
        d="M14 19.5V22h2.5l5.5-5.5-2.5-2.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 10.5V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h5.5M2 7h19M11 16h1.5M7 16h1m3-4h5m-9 0h1"
      />
    </svg>
  );
};
export default PropertyEdit;
