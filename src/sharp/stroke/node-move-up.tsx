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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.999 8V2H2v6zM14.997 14.5v-4h-3.999v4zM14.997 22v-4h-3.999v4zM5.499 8v4.5m0 0V20h5.499m-5.499-7.5h5.499"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.487 20.037h2.166a.1.1 0 0 0 .1-.1V9.682m-2.264 1.339 2.264-2.06 2.25 2.06"
      />
    </svg>
  );
};
export default NodeMoveUp;
