import React from "react";
const BitcoinSearch: React.FC<
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
        d="M17.5 17.5 22 22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 8h1m2.5 3H9.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V8m0 3v3m-1 0h1m0-6H11m-1.5 6H11m0-6V7m0 7v1"
      />
    </svg>
  );
};
export default BitcoinSearch;
