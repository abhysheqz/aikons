import React from "react";
const FocusPoint: React.FC<
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
        d="M8.5 2.5h-4a2 2 0 0 0-2 2v3m13-5h4a2 2 0 0 1 2 2v3m-6 14h4a2 2 0 0 0 2-2v-3m-13 5h-4a2 2 0 0 1-2-2v-3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11.5 7h1m-1 5h1m-1 5h1M5 12h1m12 0h1"
      />
    </svg>
  );
};
export default FocusPoint;
