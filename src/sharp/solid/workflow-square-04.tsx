import React from "react";
const WorkflowSquare_04: React.FC<
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
        d="M14.25 15a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM2.25 6A.75.75 0 0 1 3 5.25h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 10H9V8h9a1 1 0 0 1 1 1v6h-2zM7 2v4H5V2zM5 22V12h2v10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_04;
