import React from "react";
const NodeRemove: React.FC<
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
        d="M12.75 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM12.75 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 9h2v1.5h6v2h-6v6h6v2h-7a1 1 0 0 1-1-1zM6.5 5.914l1.793 1.793 1.414-1.414L7.914 4.5l1.793-1.793-1.414-1.414L6.5 3.086 4.707 1.293 3.293 2.707 5.086 4.5 3.293 6.293l1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NodeRemove;
