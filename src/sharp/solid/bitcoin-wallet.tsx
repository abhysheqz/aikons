import React from "react";
const BitcoinWallet: React.FC<
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
        d="M5.75 11.25v1.5h1.125c1.036 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.236.313.375.703.375 1.125v.75c0 1.035-.84 1.875-1.875 1.875H5.75v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H1.25v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.222 2.25c-.258 0-.505.087-.687.24a.76.76 0 0 0-.285.583v8.177h1.5v-1.5h4.5v1.52c1.687.187 3 1.618 3 3.355v.75c0 .394-.068.773-.193 1.125.125.352.193.731.193 1.125v.75c0 .49-.104.955-.292 1.375H22c.414 0 .75-.301.75-.673V6.513c0-.372-.336-.673-.75-.673h-3.25V3.073c0-.455-.435-.823-.972-.823zm14.584 3.59V3.895H3.194V5.84zM18.5 14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinWallet;
