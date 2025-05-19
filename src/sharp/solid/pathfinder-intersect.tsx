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
      <path fill="currentColor" d="M8.252 8.252h7.496v7.496l-7.496.002z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 8.25h4a.75.75 0 0 1 .75.75v3h-1.5V9.75H18zM22.75 14v3h-1.5v-3zm-13 7.25V18h-1.5v4c0 .414.336.75.75.75h3v-1.5zm11.5 0V19h1.5v3a.75.75 0 0 1-.75.75h-3v-1.5zM17 22.75h-3v-1.5h3zM6.996 1.25h3v1.5h-3zM1.246 2a.75.75 0 0 1 .75-.75h3v1.5h-2.25V5h-1.5zm13 .75h-2.25v-1.5h3a.75.75 0 0 1 .75.75v4h-1.5zm-13 7.25V7h1.5v3zm0 5v-3h1.5v2.25h3.25v1.5h-4a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PathfinderIntersect;
