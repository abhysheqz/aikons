import React from "react";
const DirectionLeft_02: React.FC<
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
        d="M13 11v10m0-18v1M9.5 21h7M8.2 4.419A1 1 0 0 1 9.016 4H17a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9.015a1 1 0 0 1-.814-.419L6 7.5z"
      />
    </svg>
  );
};
export default DirectionLeft_02;
