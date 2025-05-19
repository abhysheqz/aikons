import React from "react";
const WorkflowSquare_08: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 8zM2.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM14.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 7a1 1 0 0 1 1 1 5 5 0 0 0 5 5h3v2h-3a6.98 6.98 0 0 1-5-2.101V16H5V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_08;
