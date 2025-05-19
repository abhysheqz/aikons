import React from "react";
const WalletAdd_02: React.FC<
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
        d="M17.5 15.5a.5.5 0 0 0 0-1m0 1a.5.5 0 0 1 0-1m0 1v-1M10 18H6.5m0 0H3m3.5 0v-3.5m0 3.5v3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 21.5h8a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H3v5M15 8.5V3.724a1.224 1.224 0 0 0-1.75-1.105L3.903 7.07C3.35 7.333 3 7.89 3 8.5"
      />
    </svg>
  );
};
export default WalletAdd_02;
