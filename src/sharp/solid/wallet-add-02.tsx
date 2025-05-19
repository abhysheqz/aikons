import React from "react";
const WalletAdd_02: React.FC<
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
        d="M15.75 6.498H4.64L15.75 1.75zM5.75 18.748h-3.5v-2h3.5v-3.5h2v3.5h3.5v2h-3.5v3.5h-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 22.249H9v-2.25h3.5v-4.5H9v-3.5H4.5v3.5H2.25v-7.75h19.5zm-4.25-8.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WalletAdd_02;
