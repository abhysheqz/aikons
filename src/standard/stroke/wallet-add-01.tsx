import React from "react";
const WalletAdd_01: React.FC<
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
        d="M10 17.5H6.5m0 0H3m3.5 0V14m0 3.5V21M16 3H5a2 2 0 1 0 0 4h13V5a2 2 0 0 0-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 21h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H7m-4 6V5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"
      />
    </svg>
  );
};
export default WalletAdd_01;
