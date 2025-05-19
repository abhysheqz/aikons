import React from "react";
const DatabaseSync_01: React.FC<
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
        d="M20.163 17A3.5 3.5 0 0 0 17 15c-1.763 0-3.257 1.304-3.5 3l-1-2m1.337 4A3.5 3.5 0 0 0 17 22c1.763 0 3.257-1.304 3.5-3l1 2"
      />
      <ellipse
        cx={10.5}
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
        d="M2.5 12c0 1.53 3.054 2.815 7 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 22c-4.5 0-8.5-1.343-8.5-3V5m16 0v7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.5 11c.602.18 1.274.39 2 .5M5.5 18c.602.18 1.274.39 2 .5"
      />
    </svg>
  );
};
export default DatabaseSync_01;
