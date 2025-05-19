import React from "react";
const Alien_02: React.FC<
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
        d="m15.5 20 4 2v-8.5h1a1.5 1.5 0 0 0 0-3h-1a7.5 7.5 0 0 0-15 0h-1a1.5 1.5 0 0 0 0 3h1V22l4-2 3.5 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.992 16.973h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.5 2c0 .998-1 2.756-3 2.995M3.5 2c0 .998 1 2.756 3 2.995"
      />
      <circle
        cx={12}
        cy={10}
        r={3}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Alien_02;
