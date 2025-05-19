import React from "react";
const Film_02: React.FC<
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
        d="M21.5 21.5v-19h-19v19zM7 22V2M17 22V2M17 12H7M7 16H3m4-8H3M21 16h-4m4-8h-4"
      />
    </svg>
  );
};
export default Film_02;
