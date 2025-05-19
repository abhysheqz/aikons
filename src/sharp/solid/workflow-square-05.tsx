import React from "react";
const WorkflowSquare_05: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 7zM2.25 12a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM15.25 7a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM15.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.113 9.5 7.47 5.348l1.06-1.696 8 5a1 1 0 0 1 0 1.696L9.887 14.5l6.643 4.152-1.06 1.696-8-5a1 1 0 0 1 0-1.696z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_05;
