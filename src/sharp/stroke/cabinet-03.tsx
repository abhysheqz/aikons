import React from "react";
const Cabinet_03: React.FC<
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
        d="M5.5 18.5v3m13-3v3M3 18.5v-16h18v16z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10.5h18"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M10 14.5h4M10 6.5h4" />
    </svg>
  );
};
export default Cabinet_03;
