import React from "react";
const PathfinderExclude: React.FC<
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
        strokeWidth={1.5}
        d="M14.998 12.99V15H13m-3.998-2.01L8.998 15h2M13 9h1.998L15 10.98M10.998 9H9.002l-.004 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 18v4h13V9h-4M14.998 6V2h-13v13h4"
      />
    </svg>
  );
};
export default PathfinderExclude;
