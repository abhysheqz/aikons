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
        d="m2 2 20 20M12.5 8.5H15c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121V17M8.5 8.5H3v7c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h6c2.828 0 4.243 0 5.121-.879"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 8.5V4.118a1.618 1.618 0 0 0-2.342-1.447L8.666 4.667M3 8.5c0-.613.346-1.173.894-1.447L6 6"
      />
    </svg>
  );
};
export default WalletNotFound_02;
