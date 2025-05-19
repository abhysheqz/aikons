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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 8V2H3v6zM9 22v-6H3v6zM21 10V4h-6v6zM6 16V8M18 10v3H9a3 3 0 0 0-3 3"
      />
    </svg>
  );
};
export default WorkflowSquare_07;
