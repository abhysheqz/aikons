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
        d="M14 3H5a2 2 0 1 0 0 4h13c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C15.395 3 14.93 3 14 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21h3c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15v-2c0-2.828 0-4.243-.879-5.121C19.243 7 17.828 7 15 7H7m-4 5V5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12h-2c-.465 0-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C17 13.303 17 13.536 17 14s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052h2M10 17.5H6.5m0 0H3m3.5 0V14m0 3.5V21"
      />
    </svg>
  );
};
export default WalletAdd_01;
