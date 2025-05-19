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
        fillRule="evenodd"
        d="M4.707 1.293a1 1 0 0 0-1.414 1.414L5.086 4.5 3.293 6.293a1 1 0 0 0 1.414 1.414L6.5 5.914l1.793 1.793a1 1 0 0 0 1.414-1.414L7.914 4.5l1.793-1.793a1 1 0 0 0-1.414-1.414L6.5 3.086zM6.5 8a1 1 0 0 1 1 1v1.5h5.25V10c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 12.75 13v-.5H7.5v5a1 1 0 0 0 1 1h4.25V18c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 12.75 21v-.5H8.5a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NodeRemove;
