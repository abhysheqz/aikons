import React from "react";
const BitcoinInvoice: React.FC<
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
        d="M2 1.25a.75.75 0 0 0-.75.75l.001 19.512a.75.75 0 0 0 1.104.662l3.392-1.814 3.872 2.286a.75.75 0 0 0 .762 0l3.873-2.286 3.392 1.814a.75.75 0 0 0 1.104-.662V8.75h4V4A2.75 2.75 0 0 0 20 1.25zM18.75 4a1.25 1.25 0 1 1 2.5 0v3.25h-2.5zm-8 2.75v-1.5h-1.5v1.5h-3v1.5h1.125v4.5H6.25v1.5h3v1.5h1.5v-1.5h1.125c1.036 0 1.875-.84 1.875-1.875v-.75c0-.422-.14-.812-.375-1.125.236-.313.375-.703.375-1.125v-.75c0-1.036-.84-1.875-1.875-1.875zm-1.875 3v-1.5h3c.207 0 .375.168.375.375v.75a.375.375 0 0 1-.375.375zm0 1.5h3c.207 0 .375.168.375.375v.75a.375.375 0 0 1-.375.375h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinInvoice;
