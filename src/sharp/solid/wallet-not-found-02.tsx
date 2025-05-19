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
        fill="currentColor"
        fillRule="evenodd"
        d="M2.664 1.252 22.75 21.338l-1.414 1.414L1.25 2.666z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.746 7.75 21.75 21.754v.496H2.25V7.75zM21.75 7.75v10.469L11.281 7.75zM15.75 6.496h-5.719L8.417 4.882 15.75 1.75z"
      />
    </svg>
  );
};
export default WalletNotFound_02;
