import React from "react";
const GitMerge: React.FC<
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
        d="M7 19.977a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 7.977a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 13.977a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7 7.977v8m0-3.945h8" />
    </svg>
  );
};
export default GitMerge;
