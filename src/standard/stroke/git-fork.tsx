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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8.023a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 20.023a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 8.023a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8.023v3a1 1 0 0 0 1 1h5m6-4v3a1 1 0 0 1-1 1h-5m0 0v4"
      />
    </svg>
  );
};
export default GitFork;
