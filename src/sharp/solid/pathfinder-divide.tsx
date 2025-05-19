import React from "react";
const PathfinderDivide: React.FC<
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
      <path fill="currentColor" d="M8.25 15.75v-7.5h7.5v7.5z" />
      <path
        fill="currentColor"
        d="M8.25 17.25V22c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-4.75v9zM1.25 2A.75.75 0 0 1 2 1.25h13a.75.75 0 0 1 .75.75v4.75h-9v9H2a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default PathfinderDivide;
