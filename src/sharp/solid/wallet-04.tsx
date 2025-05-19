import React from "react";
const Wallet_04: React.FC<
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
        fillRule="evenodd"
        d="M15.75 1.75h-1.652L2.25 6.939V22.25h19.5V7.75h-6zm-1.929 6V3.94L5.123 7.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wallet_04;
