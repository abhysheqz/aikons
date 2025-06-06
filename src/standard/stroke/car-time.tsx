import React from "react";
const CarTime: React.FC<
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
        d="m20 12 1.664 2.496a2 2 0 0 1 .336 1.11V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2H5v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.394a2 2 0 0 1 .336-1.11L4 12m16 0-2 .5H6L4 12m16 0 2-1.5M4 12l1.987-4.77A2 2 0 0 1 7.833 6H10m-6 6-2-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 16v.01M6 16v.01"
      />
      <circle
        cx={17}
        cy={6}
        r={4}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 4v2l1.5.5"
      />
    </svg>
  );
};
export default CarTime;
