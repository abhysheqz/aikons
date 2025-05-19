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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7V2H3v5zM8 17v-5H3v5zM21 12V7h-5v5zM21 22v-5h-5v5zM8 4.5l8 5-8 5 8 5"
      />
    </svg>
  );
};
export default WorkflowSquare_05;
