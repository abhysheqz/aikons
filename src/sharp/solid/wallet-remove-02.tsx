import React from "react";
const WalletRemove_02: React.FC<
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
        d="M15.75 6.497H4.64l11.11-4.746zM10.578 15.333l-2.75 2.75 2.75 2.75-1.414 1.414-2.75-2.75-2.75 2.75-1.414-1.414L5 18.083l-2.75-2.75 1.414-1.414 2.75 2.75 2.75-2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 22.248H10.93l1.415-1.416-2.75-2.75 2.75-2.75-3.181-3.182-2.75 2.75-2.75-2.75-1.414 1.415V7.748h19.5zm-4.25-8.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WalletRemove_02;
