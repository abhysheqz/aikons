import React from "react";
const CarAlert: React.FC<
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
        strokeLinecap="square"
        strokeWidth={2}
        d="M18 16v.01M6 16v.01"
      />
      <circle
        cx={17}
        cy={6}
        r={4}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 4v2M17 7.99V8M20 12l2 3v7h-3v-3H5v3H2v-7l2-3m16 0-2 .5H6L4 12m16 0 2-1.5M10 6H6.5L4 12m0 0-2-1.5"
      />
    </svg>
  );
};
export default CarAlert;
