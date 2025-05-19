import React from "react";
const GitFork: React.FC<
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
        d="M4.998 12 5 8h2l-.002 3H17V8h2v4a1 1 0 0 1-1 1h-5v3h-2v-3H5.998a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default GitFork;
