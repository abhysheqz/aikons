import React from "react";
const TaskAdd_01: React.FC<
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
        d="M6.75 3c0-.966.784-1.75 1.75-1.75h5a1.75 1.75 0 1 1 0 3.5h-5A1.75 1.75 0 0 1 6.75 3M18 14a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2H19V22a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2H17V15a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.46 2.75a3.05 3.05 0 0 0 3.04 3.3h5a3.05 3.05 0 0 0 3.04-3.3h.96a2.75 2.75 0 0 1 2.75 2.75v8.409A2.5 2.5 0 0 0 15.5 15v1h-1a2.5 2.5 0 0 0 0 5h1v1q.002.393.114.75H4.5A2.75 2.75 0 0 1 1.75 20V5.5A2.75 2.75 0 0 1 4.5 2.75zM7 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3.429a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskAdd_01;
