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
        d="M6 7.744a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 19.744a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 7.744a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.008 8.209v3.55h12.001V8.184m-6.013 4.205v2.795"
      />
    </svg>
  );
};
export default GitFork;
