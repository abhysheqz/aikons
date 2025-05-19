import React from "react";
const DigitalClock: React.FC<
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
        d="M5 18v3m14-3v3M22 5H2v13h20z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M10 5 9 2.5H6L5 5" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 10.25h.009m-.009 2.5h.009M6.5 9.5v4m11-4v4m-5 0H15v-4h-2.5z"
      />
    </svg>
  );
};
export default DigitalClock;
