import React from "react";
const PathfinderCrop: React.FC<
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
      <path fill="currentColor" d="M8.25 8.252h7.496v7.496l-7.496.002z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.996 1.25h3v1.5h-3zM1.246 2a.75.75 0 0 1 .75-.75h3v1.5h-2.25V5h-1.5zm13 .75h-2.25v-1.5h3a.75.75 0 0 1 .75.75v4h-1.5zm-13 7.25V7h1.5v3zm0 5v-3h1.5v2.25h3.25v1.5h-4a.75.75 0 0 1-.75-.75M22.75 22a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-4h1.5v3.25h11.5V9.75H18v-1.5h4a.75.75 0 0 1 .75.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PathfinderCrop;
