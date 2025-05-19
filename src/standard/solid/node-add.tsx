import React from "react";
const NodeAdd: React.FC<
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
        d="M8 2a1 1 0 1 0-2 0v2H4a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2H8zm4.75 8c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 12.75 13v-.5H8v5a1 1 0 0 0 1 1h3.75V18c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-4A1.75 1.75 0 0 1 12.75 21v-.5H9a3 3 0 0 1-3-3V11a1 1 0 0 1 1.866-.5h4.884z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NodeAdd;
