import React from "react";
const StoreLocation_02: React.FC<
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
        d="M5 11a3 3 0 0 0 3-3c0 2 2.136 3 4 3s4-1 4-3a3 3 0 1 0 6 0l-2-3.5V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1.5L2 8a3 3 0 0 0 3 3Z"
      />
      <path
        fill="currentColor"
        d="M13 21.75a.75.75 0 0 0 0-1.5zM2.75 10.5V19h1.5v-8.5zM5.5 21.75H13v-1.5H5.5zM2.75 19a2.75 2.75 0 0 0 2.75 2.75v-1.5c-.69 0-1.25-.56-1.25-1.25z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 17.5h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 13.5c1.933 0 3.5 1.538 3.5 3.434C22 19.08 20 20.5 18.5 22 17 20.5 15 19.035 15 16.934c0-1.896 1.567-3.434 3.5-3.434Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 17h.009"
      />
    </svg>
  );
};
export default StoreLocation_02;
