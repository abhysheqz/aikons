import React from "react";
const Wallet_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.5 2.5a3.5 3.5 0 0 1 3.163 5H7.337a3.5 3.5 0 0 1 3.163-5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13.5 3.5H18v4H5a2 2 0 1 1 0-4h2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3 6v13.5a2 2 0 0 0 2 2h16v-14H7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 12.5h-4v4h4"
      />
    </svg>
  );
};
export default Wallet_02;
