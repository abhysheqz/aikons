import React from "react";
const PathfinderUnite: React.FC<
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
        d="M1 3.75A2.75 2.75 0 0 1 3.75 1h9a2.75 2.75 0 0 1 2.75 2.75V8h4.25a2.75 2.75 0 0 1 2.75 2.75v9a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 8 19.75V15.5H3.75A2.75 2.75 0 0 1 1 12.75z"
      />
    </svg>
  );
};
export default PathfinderUnite;
