import React from "react";
const BulletproofVest: React.FC<
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
        strokeWidth={1.5}
        d="M4.485 8.152 3 9v13h18V9l-1.485-.848A4 4 0 0 1 17.5 4.679V2h-11v2.679a4 4 0 0 1-2.015 3.473Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 13H3m3.5 4H3M21 13h-3.5m3.5 4h-3.5"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M15 12H9v6h6z" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 2a3 3 0 1 1-6 0"
      />
    </svg>
  );
};
export default BulletproofVest;
