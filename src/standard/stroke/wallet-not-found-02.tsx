import React from "react";
const WalletNotFound_02: React.FC<
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
        d="m2 2 20 20M20.642 20.642A2 2 0 0 1 19 21.5H5a2 2 0 0 1-2-2v-11h5.5m4 0H19a2 2 0 0 1 2 2V17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 8.5V3.724a1.224 1.224 0 0 0-1.75-1.105l-4.492 2.14M3 8.5c0-.61.351-1.167.903-1.43l2.145-1.022"
      />
    </svg>
  );
};
export default WalletNotFound_02;
