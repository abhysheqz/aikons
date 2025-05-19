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
        d="M7.75 3c0-.966.784-1.75 1.75-1.75h5a1.75 1.75 0 1 1 0 3.5h-5A1.75 1.75 0 0 1 7.75 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.45 3q0-.127.01-.25H5.5A2.75 2.75 0 0 0 2.75 5.5V20a2.75 2.75 0 0 0 2.75 2.75h13A2.75 2.75 0 0 0 21.25 20V5.5a2.75 2.75 0 0 0-2.75-2.75h-.96q.01.123.01.25a3.05 3.05 0 0 1-3.05 3.05h-5A3.05 3.05 0 0 1 6.45 3M8 10.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3.429a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Task_01;
