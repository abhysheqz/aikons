import React from "react";
const WalletAdd_01: React.FC<
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
        d="M2.25 18.25h3.5v3.5h2v-3.5h3.5v-2h-3.5v-3.5h-2v3.5h-3.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.75 6.25h3v5h-5.5v5.5h5.5v5H9V19.5h3.5V15H9v-3.5H4.5V15H2.25V5c0-1.519 1.304-2.75 2.912-2.75H18.75zM5.274 4.082a1.084 1.084 0 0 0 0 2.167h11.534V4.082z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M21.75 15.25h-4v-2.5h4z" />
    </svg>
  );
};
export default WalletAdd_01;
