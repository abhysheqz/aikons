import React from "react";
const BitcoinShopping: React.FC<
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
        d="M7.5 8V6.5a4.5 4.5 0 1 1 9 0V8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.255 20.283A2 2 0 0 0 7.235 22h9.53a2 2 0 0 0 1.98-1.717l1.429-10A2 2 0 0 0 18.194 8H5.806a2 2 0 0 0-1.98 2.283z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 12h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3v-3m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6v-1m0 7v1"
      />
    </svg>
  );
};
export default BitcoinShopping;
