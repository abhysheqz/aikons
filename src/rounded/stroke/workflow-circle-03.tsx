import React from "react";
const WorkflowCircle_03: React.FC<
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
        strokeWidth={1.5}
        d="M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v1m0 0c0 .932 0 1.398.178 1.765.236.49.69.88 1.262 1.083.43.152.973.152 2.06.152s1.63 0 2.06.152c.571.203 1.026.593 1.262 1.083.178.367.178.833.178 1.765v1m-7-7c0 .932 0 1.398-.178 1.765-.236.49-.69.88-1.262 1.083C10.13 12 9.587 12 8.5 12s-1.63 0-2.06.152c-.571.203-1.026.593-1.262 1.083C5 13.602 5 14.068 5 15v1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};
export default WorkflowCircle_03;
