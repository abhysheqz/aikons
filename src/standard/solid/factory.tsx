import React from "react";
const Factory: React.FC<
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
        d="M5.25 5.25A2.75 2.75 0 0 1 8 2.5h5.004a.75.75 0 0 1 0 1.5H8.001c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0M15.25 3.25A.75.75 0 0 1 16 2.5h1A.75.75 0 0 1 17 4h-1a.75.75 0 0 1-.75-.75M10.255 6.25a.75.75 0 0 1 .75-.75h6.003a.75.75 0 1 1 0 1.5h-6.003a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m11.099 23.997 8.9.002a1.75 1.75 0 0 0 1.75-1.751l-.01-9.94a.75.75 0 0 0-1.04-.69l-4.893 2.05V12.31a.75.75 0 0 0-1.032-.695l-3.547 1.437v10.196q-.002.396-.128.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.728 9.252a1.75 1.75 0 0 0-1.754-1.75l-3.976.008A1.75 1.75 0 0 0 2.25 9.26v1.24h7.477zm0 2.748H2.25v10.25c0 .967.784 1.75 1.75 1.75l4.977-.002a.75.75 0 0 0 .75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Factory;
