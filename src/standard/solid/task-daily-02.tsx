import React from "react";
const TaskDaily_02: React.FC<
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
        d="m15.383 1.25-.48 2.792a.25.25 0 0 1-.246.208H9.348a.25.25 0 0 1-.247-.21l-.46-2.79z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.907 1.25H18.5A2.75 2.75 0 0 1 21.25 4v16a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 20V4A2.75 2.75 0 0 1 5.5 1.25h1.622l.501 3.035A1.75 1.75 0 0 0 9.35 5.75h5.309a1.75 1.75 0 0 0 1.724-1.454zM13.25 11a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-1.72-.47a.75.75 0 1 0-1.06-1.06L8.5 11.44l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zM13.25 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M8 16.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskDaily_02;
