import React from "react";
const PathfinderMinusFront: React.FC<
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
        fill="currentColor"
        d="M1.25 2A.75.75 0 0 1 2 1.25h13a.75.75 0 0 1 .75.75v7.75h-6v6H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 8.25h4a.75.75 0 0 1 .75.75v3h-1.5V9.75H18zM22.75 14v3h-1.5v-3zm-13 7.25V18h-1.5v4c0 .414.336.75.75.75h3v-1.5zm11.5 0V19h1.5v3a.75.75 0 0 1-.75.75h-3v-1.5zM17 22.75h-3v-1.5h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PathfinderMinusFront;
