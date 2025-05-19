import React from "react";
const TaskDaily_01: React.FC<
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
        d="M14 11h3M7.5 11.5l1 1L11 10M14 17h3M8 17h1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 3.5h2.5a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2H8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 2h-5a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
};
export default TaskDaily_01;
