import React from "react";
const PathfinderMerge: React.FC<
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
        d="M3.75 1A2.75 2.75 0 0 0 1 3.75v9a2.75 2.75 0 0 0 2.75 2.75H6.5V9.75a.75.75 0 0 1 1.5 0v10a2.75 2.75 0 0 0 2.75 2.75h9a2.75 2.75 0 0 0 2.75-2.75v-9A2.75 2.75 0 0 0 19.75 8H15.5V3.75A2.75 2.75 0 0 0 12.75 1z"
      />
    </svg>
  );
};
export default PathfinderMerge;
