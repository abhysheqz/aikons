import React from "react";
const Doc_01: React.FC<
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
        d="M4 13V4.002a2 2 0 0 1 2.002-2l6.994.008L20 9v4M13 2.5V7a2 2 0 0 0 2 2h4.5M20 17a1 1 0 0 0-1-1h-1.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1M4 16v6h1.5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm7.25 0h1.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default Doc_01;
