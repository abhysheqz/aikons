import React from "react";
const Wallet_01: React.FC<
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
        d="M18.75 6.25h3v5h-5.5v5.5h5.5v5H5A2.75 2.75 0 0 1 2.25 19V5c0-1.519 1.304-2.75 2.912-2.75H18.75zm3 9h-4v-2.5h4zM5.274 4.082a1.084 1.084 0 0 0 .001 2.167H16.81V4.082z"
      />
    </svg>
  );
};
export default Wallet_01;
