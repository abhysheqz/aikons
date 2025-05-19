import React from "react";
const Maze: React.FC<
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
        d="M14.75 2.25v8H18v1.5h-4a.75.75 0 0 1-.75-.75V2.25H3a.75.75 0 0 0-.75.75v6.25h6V6h1.5v4a.75.75 0 0 1-.75.75H2.25v3.5H7v1.5H2.25V21c0 .414.336.75.75.75h11.25v-6H10v-1.5h11.75V3a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M21.75 15.75h-6v6H21a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default Maze;
