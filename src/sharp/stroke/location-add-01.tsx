import React from "react";
const LocationAdd_01: React.FC<
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
        d="M21 11c0 7-9 11-9 11s-9-4-9-11a9 9 0 0 1 18 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 11h-4m0 0H8m4 0v4m0-4V7"
      />
    </svg>
  );
};
export default LocationAdd_01;
