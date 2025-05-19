import React from "react";
const BitcoinRectangle: React.FC<
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
        d="M21 3H3v18h18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 16V8M11 8V6m2.5 2V6M11 18v-2m2.5 2v-2m-4-4h5m0 0a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H8m6.5-4a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 14.5 8H8"
      />
    </svg>
  );
};
export default BitcoinRectangle;
