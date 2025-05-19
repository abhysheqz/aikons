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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 14V9h-6v5zM19.5 22v-5h-6v5zM13.5 19.5h-7v-8m0-2.5v2.5m0 0h7M9 2 6.5 4.5m0 0L4 7m2.5-2.5L9 7M6.5 4.5 4 2"
      />
    </svg>
  );
};
export default NodeRemove;
