import React from "react";
const Triangle_03: React.FC<
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
        d="M3 20V5.414c0-.89 1.077-1.337 1.707-.707l14.586 14.586c.63.63.184 1.707-.707 1.707H4a1 1 0 0 1-1-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.954 8.975 3.64 3.62M18.5 13H21v-2.5m-4.046-3.475 3.64-3.62M21 5.5V3h-2.5m-3.487 4.06-3.614-3.656M11 5.5V3h2.5m3.864 5a1.364 1.364 0 1 1-2.727 0 1.364 1.364 0 0 1 2.727 0"
      />
    </svg>
  );
};
export default Triangle_03;
