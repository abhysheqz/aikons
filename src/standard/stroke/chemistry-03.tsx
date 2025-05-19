import React from "react";
const Chemistry_03: React.FC<
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
        d="M3 9h8.5M21 9h-5.5M5 3v16a2 2 0 0 0 2 2h14M10.5 4h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 4v5.705c-1.482.716-2.5 2.202-2.5 3.92C9 16.041 11.015 18 13.5 18s4.5-1.959 4.5-4.375c0-1.718-1.018-3.204-2.5-3.92V4"
      />
    </svg>
  );
};
export default Chemistry_03;
