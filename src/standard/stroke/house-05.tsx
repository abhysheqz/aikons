import React from "react";
const House_05: React.FC<
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
        d="M4 11h16v11H4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 22v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4M2 11h20.001V8.5l-10-6.5L12 6 2 8.5zM3 22h18M7 15h1M17 15h-1M5 7.5V3"
      />
    </svg>
  );
};
export default House_05;
