import React from "react";
const PathfinderIntersect: React.FC<
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
        strokeWidth={1.5}
        d="M14.998 9.002H9.002V15l5.996-.002z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 14v3m-5 5h-3m8-10V9h-4m4 10v3h-3m-7 0H9v-4M1.996 12v3h4m-4-10V2h3m7 0h3v4m-13 1v3m8-8h-3"
      />
    </svg>
  );
};
export default PathfinderIntersect;
