import React from "react";
const Hexagon: React.FC<
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
        d="M21.002 15.823V8.177a2 2 0 0 0-1.029-1.749l-7-3.888a2 2 0 0 0-1.942 0L4.029 6.428A2 2 0 0 0 3 8.177v7.646a2 2 0 0 0 1.029 1.749l7.002 3.889a2 2 0 0 0 1.942 0l7-3.89a2 2 0 0 0 1.029-1.748Z"
      />
    </svg>
  );
};
export default Hexagon;
