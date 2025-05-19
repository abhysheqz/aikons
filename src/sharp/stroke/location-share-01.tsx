import React from "react";
const LocationShare_01: React.FC<
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
        d="M21.168 7a10.03 10.03 0 0 1 0 8.002m-18.336 0a10.03 10.03 0 0 1 0-8.002"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 11.2c0 5.6-7 8.8-7 8.8s-7-3.2-7-8.8C5 7.224 8.134 4 12 4s7 3.224 7 7.2Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};
export default LocationShare_01;
