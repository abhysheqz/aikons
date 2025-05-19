import React from "react";
const BitcoinWallet: React.FC<
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
        d="M16 13a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 6h8m0 0h4v13H10m8-13V3H2v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3.125 19.5v-6M5 13.5V12m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H2m4.875-3C7.496 16.5 8 15.996 8 15.375v-.75c0-.621-.504-1.125-1.125-1.125H2"
      />
    </svg>
  );
};
export default BitcoinWallet;
