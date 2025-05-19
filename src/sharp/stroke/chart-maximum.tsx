import React from "react";
const ChartMaximum: React.FC<
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
        d="M21 21H3V3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6h.009m2.99 0h.008m2.99 0h.008m2.99 0h.009m2.989 0h.009m2.989 0H21"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21c0-6.627-2.686-12-6-12s-6 5.373-6 12"
      />
    </svg>
  );
};
export default ChartMaximum;
