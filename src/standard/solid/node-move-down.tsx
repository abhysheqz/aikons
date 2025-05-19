import React from "react";
const NodeMoveDown: React.FC<
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
        d="M1.25 3c0-.966.784-1.75 1.75-1.75h4.999c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H6.5v2.75h3.75c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 14 15.25h-2a1.75 1.75 0 0 1-1.75-1.75H6.5V18a1 1 0 0 0 1 1h2.75c0-.967.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 14 22.75h-2A1.75 1.75 0 0 1 10.25 21H7.5a3 3 0 0 1-3-3V8.75H3A1.75 1.75 0 0 1 1.25 7zM18 11.5a1 1 0 1 0 0 2h1V19h-1a1 1 0 0 0-.707 1.707l2 2a1 1 0 0 0 1.414 0l2-2A1 1 0 0 0 22 19h-1v-6.5a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NodeMoveDown;
