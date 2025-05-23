import React from "react";
const Tractor: React.FC<
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
        d="M16 18h-2.15q.15-.728.15-1.5a7.5 7.5 0 0 0-12-6"
      />
      <circle
        cx={6.5}
        cy={16.5}
        r={4.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={19}
        cy={18}
        r={3}
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
        d="m13 9 6.369 1.194A2 2 0 0 1 21 12.16v3.34M13 12.5V9l-1.5-6M4 9V3M3 3h10M18 9.5V7a1 1 0 0 1 1-1h1M7 9V3"
      />
      <path
        fill="currentColor"
        d="M19 11.25a.75.75 0 0 0 0 1.5zm0 1.5h2v-1.5h-2z"
      />
    </svg>
  );
};
export default Tractor;
