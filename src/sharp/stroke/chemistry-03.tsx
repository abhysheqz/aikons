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
      <path stroke="currentColor" strokeWidth={1.5} d="M2 9h9.5M22 9h-6.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v18h17M10 4h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.7 4v5.614c-1.59.675-2.7 2.217-2.7 4.011C9 16.041 11.015 18 13.5 18s4.5-1.959 4.5-4.375c0-1.794-1.11-3.336-2.7-4.011V4"
      />
    </svg>
  );
};
export default Chemistry_03;
