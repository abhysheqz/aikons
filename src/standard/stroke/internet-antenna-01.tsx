import React from "react";
const InternetAntenna_01: React.FC<
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
        d="M9.113 20.6 12 14l2.887 6.6a1 1 0 0 1-.916 1.4H10.03a1 1 0 0 1-.916-1.4"
      />
      <circle
        cx={12}
        cy={12}
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
        d="M4 18.001A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 2.252-.744 4.33-2 6.001"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.528 16a6 6 0 1 1 8.944 0"
      />
    </svg>
  );
};
export default InternetAntenna_01;
