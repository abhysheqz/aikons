import React from "react";
const PathfinderTrim: React.FC<
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
        d="M8.25 9A.75.75 0 0 1 9 8.25h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M1.25 2A.75.75 0 0 1 2 1.25h13a.75.75 0 0 1 .75.75v4.75H9A2.25 2.25 0 0 0 6.75 9v6.75H2a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default PathfinderTrim;
