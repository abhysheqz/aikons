import React from "react";
const BitcoinReceive: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 5h7.889A3.11 3.11 0 0 1 13 8.111 3.89 3.89 0 0 1 9.111 12M2 19h7.5a3.5 3.5 0 1 0 0-7h-.389m0 0h-5.91M3 5v14M5 3v2m4-2v2M5 19v2m4-2v2M18.5 14.5 16 12l2.5-2.5M22 12h-5.391"
      />
    </svg>
  );
};
export default BitcoinReceive;
