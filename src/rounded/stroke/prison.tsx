import React from "react";
const Prison: React.FC<
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
        d="M3 3v18M9 3v18M15 15v6M15 3v6M21 3v18M2 3h20M21 9h-6c-.943 0-1.414 0-1.707.293S13 10.057 13 11v2c0 .943 0 1.414.293 1.707S14.057 15 15 15h6M2 21h20M17 12h-1"
      />
    </svg>
  );
};
export default Prison;
