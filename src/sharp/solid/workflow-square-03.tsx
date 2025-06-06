import React from "react";
const WorkflowSquare_03: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 6zM12.25 11a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75zM3.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.998 8.5 6 6l2 .001-.001 1.5h9a1 1 0 0 1 1 1V11h-2V9.5H6.999a1 1 0 0 1-1-1.001M16 19v-4h2v5a1 1 0 0 1-1 1h-5v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_03;
