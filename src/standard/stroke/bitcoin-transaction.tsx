import React from "react";
const BitcoinTransaction: React.FC<
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
        d="M10.694 3.051c10.15-.915 13.128 10.66 7.477 15.473M17.001 16v3.5h3.5m-7.206 1.46C3.195 21.763.167 10.3 5.818 5.487M7 7.5v-3H3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 9h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3V9m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6V8m0 7v1"
      />
    </svg>
  );
};
export default BitcoinTransaction;
