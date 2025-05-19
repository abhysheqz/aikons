import React from "react";
const NodeMoveUp: React.FC<
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
        d="M1.25 3c0-.966.784-1.75 1.75-1.75h4.999c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-1.5v2.75h3.751c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 14 15.25h-2a1.75 1.75 0 0 1-1.75-1.75H6.499V18a1 1 0 0 0 1 1h2.749c0-.967.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75H7.499a3 3 0 0 1-3-3V8.75H3A1.75 1.75 0 0 1 1.25 7zM18 21a1 1 0 1 1 0-2h1v-7h-1a1 1 0 0 1-.707-1.707l2-2a1 1 0 0 1 1.414 0l2 2A1 1 0 0 1 22 12h-1v8a1 1 0 0 1-1 1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NodeMoveUp;
