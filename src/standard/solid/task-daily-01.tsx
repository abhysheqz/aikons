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
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 3c0-.966.784-1.75 1.75-1.75h5a1.75 1.75 0 1 1 0 3.5h-5A1.75 1.75 0 0 1 7.75 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.46 2.75a3.05 3.05 0 0 0 3.04 3.3h5a3.05 3.05 0 0 0 3.04-3.3h.96a2.75 2.75 0 0 1 2.75 2.75V20a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 20V5.5A2.75 2.75 0 0 1 5.5 2.75zM13.25 11a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-1.72-.47a.75.75 0 1 0-1.06-1.06L8.5 11.44l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zM13.25 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M8 16.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskDaily_01;
