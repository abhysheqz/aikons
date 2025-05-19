import React from "react";
const WorkflowSquare_09: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 8zM2.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM14.25 2a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 16V8H5v8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 11V8h2v4a1 1 0 0 1-1 1H6v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_09;
