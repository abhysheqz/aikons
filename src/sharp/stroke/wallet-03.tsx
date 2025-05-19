import React from "react";
const Wallet_03: React.FC<
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
        d="M21 21.5v-13H3v13zM15 2.5 3 8v.5h12z"
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
export default Wallet_03;
