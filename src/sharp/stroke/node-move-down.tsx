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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.996 22v-4h-4v4zM14.996 14.5v-4h-4v4zM8.998 8V2H2v6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.499 8v4.5m0 0V20h5.498M5.5 12.5h5.498"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.483 12.504h2.166a.1.1 0 0 1 .1.1V21.5m-2.243-1.494L19.749 22l2.254-1.993"
      />
    </svg>
  );
};
export default NodeMoveDown;
