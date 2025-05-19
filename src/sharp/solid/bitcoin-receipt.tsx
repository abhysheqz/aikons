import React from "react";
const BitcoinReceipt: React.FC<
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
        d="M4 1.25a.75.75 0 0 0-.75.75l.001 19.512a.75.75 0 0 0 1.087.67L7.96 20.36l3.642 2.276a.75.75 0 0 0 .796 0l3.642-2.276 3.623 1.822a.75.75 0 0 0 1.087-.67V2a.75.75 0 0 0-.75-.75zm8.75 5.5v-1.5h-1.5v1.5h-3v1.5h1.125v4.5H8.25v1.5h3v1.5h1.5v-1.5h1.125c1.036 0 1.875-.84 1.875-1.875v-.75c0-.422-.14-.812-.375-1.125.236-.313.375-.703.375-1.125v-.75c0-1.036-.84-1.875-1.875-1.875zm-1.875 3v-1.5h3c.207 0 .375.168.375.375v.75a.375.375 0 0 1-.375.375zm0 1.5h3c.207 0 .375.168.375.375v.75a.375.375 0 0 1-.375.375h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinReceipt;
