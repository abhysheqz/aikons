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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2A.75.75 0 0 1 2 1.25h13a.75.75 0 0 1 .75.75v6.25H22a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-6.25H2a.75.75 0 0 1-.75-.75zm8.5 7.75v4.5h4.5v-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PathfinderExclude;
