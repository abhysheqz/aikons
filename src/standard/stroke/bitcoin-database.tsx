import React from "react";
const BitcoinDatabase: React.FC<
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
      <ellipse
        cx={12}
        cy={5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={8}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12c0 1.594 3.315 2.903 7.5 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 11.5V5M4 5v14c0 1.594 3.315 2.903 7.5 3M15 15h1m2.5 3H16m2.5 0a1.5 1.5 0 0 0 0-3h-1m1 3a1.5 1.5 0 0 1 0 3h-1M16 18v-3m0 3v3m-1 0h1m0-6h1.5M16 21h1.5m0-6v-1m0 7v1"
      />
    </svg>
  );
};
export default BitcoinDatabase;
