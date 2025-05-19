import React from "react";
const BitcoinLock: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 10.998a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 9V6.364C7.5 3.954 9.446 2 11.847 2h.306C14.555 2 16.5 3.954 16.5 6.364V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 12.498h1m2.5 3h-2.5m2.5 0a1.5 1.5 0 1 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1m-1.5-3v-3m0 3v3m-1 0h1m0-6H12m-1.5 6H12m0-6v-1m0 7v1"
      />
    </svg>
  );
};
export default BitcoinLock;
