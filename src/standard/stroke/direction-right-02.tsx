import React from "react";
const DirectionRight_02: React.FC<
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
        d="M10 11v10m0-18v1M6.5 21h7M15.8 4.419A1 1 0 0 0 14.984 4H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7.985a1 1 0 0 0 .814-.419L18 7.5z"
      />
    </svg>
  );
};
export default DirectionRight_02;
