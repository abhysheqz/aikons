import React from "react";
const WalletDone_01: React.FC<
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
        d="m3 19 2 2 6-6M16 3H5a2 2 0 1 0 0 4h13V5a2 2 0 0 0-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 21h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H7m-4 7V5"
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
export default WalletDone_01;
