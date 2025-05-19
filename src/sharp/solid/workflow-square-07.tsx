import React from "react";
const WorkflowSquare_07: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 8zM2.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM14.25 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 16V8h2v4.535A4 4 0 0 1 9 12h8v-2h2v3a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2 1 1 0 1 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_07;
