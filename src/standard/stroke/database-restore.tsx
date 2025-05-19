import React from "react";
const DatabaseRestore: React.FC<
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
        d="M11 15c-4.418 0-8-1.343-8-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6 11c.602.18 1.274.39 2 .5M6 18c.602.18 1.274.39 2 .5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 13.5v2l-1.035-.738a4.04 4.04 0 0 0-2.425-.804c-2.231 0-4.04 1.8-4.04 4.02C13 20.2 14.809 22 17.04 22A4.04 4.04 0 0 0 21 18.783"
      />
    </svg>
  );
};
export default DatabaseRestore;
