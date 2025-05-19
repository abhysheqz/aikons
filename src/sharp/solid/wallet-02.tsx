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
        fill="currentColor"
        d="M10.5 1.75a4.25 4.25 0 0 1 4.242 4H6.258a4.25 4.25 0 0 1 4.242-4"
      />
      <path
        fill="currentColor"
        d="M18.75 6.75h3v5h-5.5v5.5h5.5v5H5a2.75 2.75 0 0 1-2.75-2.75v-14c0-1.519 1.304-2.75 2.912-2.75h1.216a5.2 5.2 0 0 0-.932 1.832h-.172a1.084 1.084 0 0 0 .001 2.167H16.81V4.582h-1.255a5.2 5.2 0 0 0-.932-1.832h4.128z"
      />
      <path fill="currentColor" d="M21.75 15.75h-4v-2.5h4z" />
    </svg>
  );
};
export default Wallet_02;
