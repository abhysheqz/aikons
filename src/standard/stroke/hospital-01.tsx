import React from "react";
const Hospital_01: React.FC<
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
        d="M14 2v2.498m0 0V7m0-2.502h-4M10 2v2.498m0 0V7M7 5H6a2 2 0 0 0-2 2v15M17 5h1a2 2 0 0 1 2 2v15"
      />
      <path fill="#D9D9D9" d="M14 11h2zM14 14h2zM8 14h2zM8 11h2z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 11h2m-2 3h2m-8 0h2m-2-3h2M2.5 22h7v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3h7"
      />
    </svg>
  );
};
export default Hospital_01;
