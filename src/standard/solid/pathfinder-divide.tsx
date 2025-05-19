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
      <path
        fill="currentColor"
        d="M3.75 1A2.75 2.75 0 0 0 1 3.75v9a2.75 2.75 0 0 0 2.75 2.75H6.5v-4.75a4.25 4.25 0 0 1 4.25-4.25h4.75V3.75A2.75 2.75 0 0 0 12.75 1zM8 17v2.75a2.75 2.75 0 0 0 2.75 2.75h9a2.75 2.75 0 0 0 2.75-2.75v-9A2.75 2.75 0 0 0 19.75 8H17v4.75A4.25 4.25 0 0 1 12.75 17z"
      />
      <path
        fill="currentColor"
        d="M15.5 8v4.75a2.75 2.75 0 0 1-2.75 2.75H8v-4.75A2.75 2.75 0 0 1 10.75 8z"
      />
    </svg>
  );
};
export default PathfinderDivide;
