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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.293 9.293a1 1 0 0 0 1.414 0l2.586-2.586a1 1 0 0 0 0-1.414l-2.586-2.586a1 1 0 0 0-1.414 0L8.707 5.293a1 1 0 0 0 0 1.414zM14.5 21v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1ZM7 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM22 13.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM12 10v7M9.5 8.5l-3 3M14.5 8.5l3 3"
      />
    </svg>
  );
};
export default WorkflowSquare_10;
