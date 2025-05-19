import React from "react";
const TaskRemove_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16h3.429M7 11h8M15 3.5h2.5a2 2 0 0 1 2 2v7M7 3.5H4.5a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2H12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 2h-5a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 0-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.5 16-3 3m0 0-3 3m3-3 3 3m-3-3-3-3"
      />
    </svg>
  );
};
export default TaskRemove_01;
