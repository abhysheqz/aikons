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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 19.5H7v-8M7 10v1.5m0 0h6.5M19.5 22v-5h-6v5zM19.5 14V9h-6v5zM7 2v6m3-3H4"
      />
    </svg>
  );
};
export default NodeAdd;
