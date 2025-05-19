import React from "react";
const BitcoinWithdraw: React.FC<
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
        d="M1 3.25a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2v-2h1v-6H3v6h1v2H2a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 6.25a.75.75 0 0 0-.748.697l-1 14A.75.75 0 0 0 5 21.75h14a.75.75 0 0 0 .748-.803l-1-14A.75.75 0 0 0 18 6.25zm6.75 4.333V9.25h-1.5v1.333h-2.5v1.5h.938v3.834H8.75v1.5h2.5v1.333h1.5v-1.333h.813c.976 0 1.687-.83 1.687-1.75V15c0-.362-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75zm-1.562 2.667v-1.167h2.374c.06 0 .188.066.188.25V13c0 .184-.129.25-.187.25zm0 1.5h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25h-2.376z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinWithdraw;
