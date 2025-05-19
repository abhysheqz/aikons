import React from "react";
const TaskAdd_02: React.FC<
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
        d="M12 22H4.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 2H7l.36 2.164A1 1 0 0 0 8.348 5h5.306a1 1 0 0 0 .986-.836z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 16h3.429M7 11h8M18 15v7m3.5-3.5h-7"
      />
    </svg>
  );
};
export default TaskAdd_02;
