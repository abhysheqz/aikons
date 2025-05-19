import React from "react";
const Uv_03: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 13a5 5 0 0 0-10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4h.009M18.367 6.633l.006.006M5.637 6.64l.006-.007M21.004 12.996v.009M3.004 12.996v.009"
      />
      <path
        fill="currentColor"
        d="M10 21v.75h.75V21zm-4 0h-.75c0 .414.336.75.75.75zm3.25-5v5h1.5v-5zm.75 4.25H6v1.5h4zM6.75 21v-5h-1.5v5z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m13 16 2 5h1l2-5" />
    </svg>
  );
};
export default Uv_03;
