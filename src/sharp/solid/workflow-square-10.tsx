import React from "react";
const WorkflowSquare_10: React.FC<
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
        d="M11.47 1.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06zM8.75 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM1.25 13.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M16.25 13.5a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 17v-7h2v7zM5.793 10.793l3-3 1.414 1.414-3 3zM16.793 12.207l-3-3 1.414-1.414 3 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_10;
