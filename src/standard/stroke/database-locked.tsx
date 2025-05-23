import React from "react";
const DatabaseLocked: React.FC<
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
        cx={11}
        cy={5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={8}
        ry={3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3 12c0 1.53 3.49 2.816 8 3M6 11c.602.18 1.274.39 2 .5M6 18c.602.18 1.274.39 2 .5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 16.5H14V22h7v-5.5h-1.5m-4 0V15a2 2 0 1 1 4 0v1.5m-4 0h4"
      />
    </svg>
  );
};
export default DatabaseLocked;
