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
        d="M18.75 1h-14A2.75 2.75 0 0 0 2 3.75v17.5a.75.75 0 0 0 1.122.651l3.083-1.761 3.11 2.22a.75.75 0 0 0 .87 0l3.11-2.22 3.083 1.761a.75.75 0 0 0 1.122-.651V8.5h3.25a.75.75 0 0 0 .75-.75v-4A2.75 2.75 0 0 0 18.75 1m-1.145 2.247A1.25 1.25 0 0 1 20 3.75V7h-2.493q0-.44-.007-.846V4.053a6 6 0 0 1 .059-.576q.022-.128.046-.23M9.75 6a.75.75 0 0 1 .75.75V7h.25a2.25 2.25 0 0 1 1.677 3.75 2.25 2.25 0 0 1-1.677 3.75h-.25v.25a.75.75 0 0 1-1.5 0v-.25H7.25a.75.75 0 0 1 0-1.5h.25V8.5h-.25a.75.75 0 0 1 0-1.5H9v-.25A.75.75 0 0 1 9.75 6M9 10V8.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinInvoice;
