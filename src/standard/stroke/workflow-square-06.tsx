import React from "react";
const WorkflowSquare_06: React.FC<
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
        d="M15 7V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1ZM8 21v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1ZM22 21v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1ZM12 8v1m0 0c0 .932 0 1.398.178 1.765.236.49.69.88 1.262 1.083.43.152.973.152 2.06.152H17a2 2 0 0 1 2 2v2m-7-7c0 .932 0 1.398-.178 1.765-.236.49-.69.88-1.262 1.083C10.13 12 9.587 12 8.5 12H7a2 2 0 0 0-2 2v2"
      />
    </svg>
  );
};
export default WorkflowSquare_06;
