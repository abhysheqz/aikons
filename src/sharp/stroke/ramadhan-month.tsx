import React from "react";
const RamadhanMonth: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 2v4M7 2v4M21.5 4h-18v18h18z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 9h18"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 16.934a3.23 3.23 0 1 1-4.434-4.434"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 14h.009"
      />
    </svg>
  );
};
export default RamadhanMonth;
