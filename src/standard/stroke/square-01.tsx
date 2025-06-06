import React from "react";
const Square_01: React.FC<
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
        d="M2 21C7.173 21 9.827 7 15 7M3 7h1.5c1.033 0 1.793.66 2.136 1.648l3.728 10.704C10.707 20.339 11.466 21 12.5 21H14M22 9h-4l3.2-2.4A2 2 0 1 0 18 5"
      />
    </svg>
  );
};
export default Square_01;
