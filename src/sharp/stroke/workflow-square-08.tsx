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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 8V2H3v6zM9 22v-6H3v6zM21 17v-6h-6v6zM6 8v8M15 14h-3a6 6 0 0 1-6-6"
      />
    </svg>
  );
};
export default WorkflowSquare_08;
