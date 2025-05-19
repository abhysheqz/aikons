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
        d="M8 10.75A2.75 2.75 0 0 1 10.75 8h9a2.75 2.75 0 0 1 2.75 2.75v9a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 8 19.75z"
      />
      <path
        fill="currentColor"
        d="M3.75 1A2.75 2.75 0 0 0 1 3.75v9a2.75 2.75 0 0 0 2.75 2.75h3v-4.75a4 4 0 0 1 4-4h4.75v-3A2.75 2.75 0 0 0 12.75 1z"
      />
    </svg>
  );
};
export default PathfinderTrim;
