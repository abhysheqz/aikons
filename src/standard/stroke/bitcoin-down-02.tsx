import React from "react";
const BitcoinDown_02: React.FC<
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
        d="M10.5 9a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 13v2.5m0 0V18m0-2.5h1.75M10.5 13v-1m0 6.125V19m-2-6h2.75a1.25 1.25 0 1 1 0 2.5m0 0a1.25 1.25 0 1 1 0 2.5H8.5M20 4.5V8h-3.5m-12-6L10 6l4-4 5.5 5.5"
      />
    </svg>
  );
};
export default BitcoinDown_02;
