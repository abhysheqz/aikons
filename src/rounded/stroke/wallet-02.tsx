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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 3.5h1c.93 0 1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C18 6.105 18 6.57 18 7.5H5a2 2 0 1 1 0-4h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5.5v10c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h6c2.828 0 4.243 0 5.121-.879C21 19.743 21 18.328 21 15.5v-2c0-2.828 0-4.243-.879-5.121C19.243 7.5 17.828 7.5 15 7.5H7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12.5h-2c-.465 0-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.191-.052.424-.052.889s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052h2M10.5 2.5a3.5 3.5 0 0 1 3.163 5H7.337a3.5 3.5 0 0 1 3.163-5"
      />
    </svg>
  );
};
export default Wallet_02;
