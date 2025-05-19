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
        d="m2 2 20 20M7 3h9a2 2 0 0 1 2 2v2h-7M3.586 3.586A2 2 0 0 0 5 7h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5v14a2 2 0 0 0 2 2h14c.552 0 1.052-.224 1.414-.586M21 17V9a2 2 0 0 0-2-2h-8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12h-3a1 1 0 0 0-1 1"
      />
    </svg>
  );
};
export default WalletNotFound_01;
