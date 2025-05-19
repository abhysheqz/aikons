import React from "react";
const GarbageTruck: React.FC<
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
        d="M11 9v3m-4-2v2"
      />
      <circle
        cx={17}
        cy={18}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={7}
        cy={18}
        r={2}
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
        d="M17 4h-2m0 0H7.414a1 1 0 0 0-.707.293L2.293 8.707A1 1 0 0 0 2 9.414V17a1 1 0 0 0 1 1h2M15 4v7a1 1 0 0 0 1 1h6v5a1 1 0 0 1-1 1h-2M9 18h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 7h3.264a2 2 0 0 1 1.789 1.106L22 12"
      />
    </svg>
  );
};
export default GarbageTruck;
