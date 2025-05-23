import React from "react";
const BitcoinMind: React.FC<
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
        d="M15 22v-3.5l2.876.36A1 1 0 0 0 19 17.867V14.5l2-1.5-2-3a8 8 0 1 0-10.5 7.602M6 16.245V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 7h1m2.5 3H9.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V7m0 3v3m-1 0h1m0-6H11m-1.5 6H11m0-6V6m0 7v1"
      />
    </svg>
  );
};
export default BitcoinMind;
