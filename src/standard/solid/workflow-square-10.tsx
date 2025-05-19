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
        fillRule="evenodd"
        d="M10.586 2a2 2 0 0 1 2.828 0L16 4.586a2 2 0 0 1 0 2.828L15.414 8l2.606 2.606a3.25 3.25 0 1 1-1.414 1.414L14 9.414l-.586.586a2 2 0 0 1-.414.318v5.932h.5c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 8.75 21v-3c0-.966.784-1.75 1.75-1.75h.5v-5.932a2 2 0 0 1-.414-.318L10 9.414 7.394 12.02a3.25 3.25 0 1 1-1.414-1.414L8.586 8 8 7.414a2 2 0 0 1 0-2.828z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowSquare_10;
