import React from "react";
const Task_01: React.FC<
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
        d="M3.5 3h3.25v3h10.5V3h3.25a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 3.5 3m4.498 8.75h8v-1.5h-8zm0 5h4v-1.5h-4z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M16 1.25H8v3.5h8z" />
    </svg>
  );
};
export default Task_01;
