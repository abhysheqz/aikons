import React from "react";
const JoggerPants: React.FC<
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
        d="M10 7.778 12 5l3 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18 5V2H6v3m12 0 2.998 16.988a.01.01 0 0 1-.01.012h-4.981a.01.01 0 0 1-.01-.006l-3.988-10.47c-.003-.008-.015-.008-.018 0l-3.989 10.47a.01.01 0 0 1-.009.006H3.012a.01.01 0 0 1-.01-.012L6 5m12 0H6"
      />
    </svg>
  );
};
export default JoggerPants;
