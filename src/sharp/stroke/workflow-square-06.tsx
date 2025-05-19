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
        d="M15 8V2H9v6zM8 22v-6H2v6zM22 22v-6h-6v6zM12 8v1m0 0c0 .932 0 1.398.178 1.765.236.49.69.88 1.262 1.083.43.152.973.152 2.06.152H19v4m-7-7c0 .932 0 1.398-.178 1.765-.236.49-.69.88-1.262 1.083C10.13 12 9.587 12 8.5 12H5v4"
      />
    </svg>
  );
};
export default WorkflowSquare_06;
