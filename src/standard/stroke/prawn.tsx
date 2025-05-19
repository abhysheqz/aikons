import React from "react";
const Prawn: React.FC<
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
        d="M10.5 5a8.5 8.5 0 0 0 0 17c4.694 0 8.5-4.306 8.5-9-2 0-4.25 1.842-4.25 3.9M10.5 5H19c0 5.5-3.625 6.8-6.8 6.8h-1.7a2.55 2.55 0 0 0 0 5.1h4.25M10.5 5v3m4.25 8.9V18M5.4 20.3l3.4-3.4M3.275 9.25l4.675 3.825"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.009 8H14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 2h10.66c1.161 0 2.031 1.051 1.804 2.178-.295 1.46-1.62 2.5-3.045 2.822"
      />
    </svg>
  );
};
export default Prawn;
