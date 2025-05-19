import React from "react";
const WorkflowSquare_02: React.FC<
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
        d="M11 6V2H3v4zM21 15v-4h-8v4zM21 22v-4h-8v4zM17 11V8.5H7V6M17 15v3"
      />
    </svg>
  );
};
export default WorkflowSquare_02;
