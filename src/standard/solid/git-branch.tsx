import React from "react";
const GitBranch: React.FC<
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
        d="M5 2.25a2.75 2.75 0 0 0-1 5.313v8.875A2.75 2.75 0 1 0 7.563 20H16.5a3 3 0 0 0 3-3v-3.5H21a1 1 0 0 0 .707-1.707l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5A1 1 0 0 0 16 13.5h1.5V17a1 1 0 0 1-1 1H7.563A2.76 2.76 0 0 0 6 16.438V7.563A2.751 2.751 0 0 0 5 2.25M15.75 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitBranch;
