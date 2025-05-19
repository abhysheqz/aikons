import React from "react";
const WorkflowCircle_01: React.FC<
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
        d="M2.25 9a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
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
export default WorkflowCircle_01;
