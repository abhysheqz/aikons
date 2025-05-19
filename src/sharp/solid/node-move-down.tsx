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
        d="M10.25 18a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zM10.25 10.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zM1.25 2A.75.75 0 0 1 2 1.25h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2A.75.75 0 0 1 1.25 8z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 8h2v3.5H11v2H6.5V19H11v2H5.5a1 1 0 0 1-1-1zM19.75 23.338l2.915-2.59-1.33-1.495-.585.52V12.5a1 1 0 0 0-1-1H17.5v2h1.25v6.273l-.585-.52-1.33 1.494z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NodeMoveDown;
