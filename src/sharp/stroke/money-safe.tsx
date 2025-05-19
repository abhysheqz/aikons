import React from "react";
const MoneySafe: React.FC<
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
        d="M22 2H2v17h20z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m17 6.5 1 1v6l-1 1" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 22v-3M6 22v-3M9.5 12.5a2.01 2.01 0 0 0 2.02-2c0-1.105-.904-2-2.02-2m0 4a2.01 2.01 0 0 1-2.02-2c0-1.105.904-2 2.02-2m0 4v2m0-6v-2m-1.75 5L6 12.5m7-4-1.75 1m0 2 1.75 1m-7-4 1.75 1"
      />
    </svg>
  );
};
export default MoneySafe;
