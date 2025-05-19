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
        fill="currentColor"
        d="M21.75 7.748v14.5H2.25v-14.5zm-4.25 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M15.75 6.498H4.64l11.11-4.746z"
      />
    </svg>
  );
};
export default Wallet_03;
