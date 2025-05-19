import React from "react";
const Hotel_02: React.FC<
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
        d="M3 7v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7M6 11h1m-1 3.5h1M17 11h1m-1 3.5h1M10.5 8.5v2.009m0 0V12.5m0-1.991h2.997m0-2.009v2.009m0 0V12.5M17 7A5 5 0 0 0 7 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7h5c0-1-1-3-2-4h-5M7 7H2c0-1 1-3 2-4h5M14.006 22v-3.999a2.001 2.001 0 1 0-4.002 0v4"
      />
    </svg>
  );
};
export default Hotel_02;
