import React from "react";
const WalletNotFound_01: React.FC<
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
        d="m2 2 20 20M7 7H5a2 2 0 0 1-1.414-3.414M21 12h-2c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 7h4c2.828 0 4.243 0 5.121.879C21 8.757 21 10.172 21 13v4M3 5v10c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 3h7c.93 0 1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C18 5.605 18 6.07 18 7"
      />
    </svg>
  );
};
export default WalletNotFound_01;
