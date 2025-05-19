import React from "react";
const CircleLockRemove_01: React.FC<
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
        d="M10.5 22c-3.948 0-7-3.134-7-7s3.2-7 7.148-7c2.765 0 5.163 1.537 6.352 3.787"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3M13.5 22l3.5-3.5m0 0 3.5-3.5M17 18.5 13.5 15m3.5 3.5 3.5 3.5"
      />
    </svg>
  );
};
export default CircleLockRemove_01;
