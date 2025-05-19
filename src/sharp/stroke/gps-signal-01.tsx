import React from "react";
const GpsSignal_01: React.FC<
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
        d="M9 10.03A3.515 3.515 0 0 1 13.97 15M2 12.37A9.63 9.63 0 0 0 11.63 22c2.442 0 4.672-.91 6.37-2.407L4.408 6A9.6 9.6 0 0 0 2 12.37Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.557 2c1.68.172 3.224.84 4.412 2.026 1.192 1.19 1.86 2.737 2.031 4.42M18.502 9a4.66 4.66 0 0 0-1.242-2.27A4.67 4.67 0 0 0 15 5.495"
      />
    </svg>
  );
};
export default GpsSignal_01;
