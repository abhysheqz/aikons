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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21v-6h-6v6zM9 12V6H3v6zM9 9h9v6M6 12v10M6 6V2"
      />
    </svg>
  );
};
export default WorkflowSquare_04;
