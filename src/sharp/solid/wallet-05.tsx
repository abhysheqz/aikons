import React from "react";
const Wallet_05: React.FC<
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
        d="M22.75 3.25H1.25v6h7.151l2 3H13.6l2-3h7.151zm0 7.5h-6.349l-2 3H9.6l-2-3H1.25v10h21.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wallet_05;
