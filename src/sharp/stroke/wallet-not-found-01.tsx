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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m2 2 20 20M7 3h11v4h-7M3.586 3.586A2 2 0 0 0 5 7h1.5M21 16h-1m-3-3v-1h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20.5 21H5a2 2 0 0 1-2-2V5.5M11 7h10v10"
      />
    </svg>
  );
};
export default WalletNotFound_01;
