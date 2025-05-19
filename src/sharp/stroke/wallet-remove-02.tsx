import React from "react";
const WalletRemove_02: React.FC<
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
        d="m9 15.5-6 6m0-6 6 6M3 12V8.5h18v13h-8.5M15 2.5 3 8v.5h12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.5 15.5a.5.5 0 0 0 0-1m0 1a.5.5 0 0 1 0-1m0 1v-1"
      />
    </svg>
  );
};
export default WalletRemove_02;
