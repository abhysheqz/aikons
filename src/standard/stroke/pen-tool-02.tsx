import React from "react";
const PenTool_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 13.997v8M10.5 13.5c.367.307.903.5 1.5.5s1.133-.193 1.5-.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.25 12.45 7.5 7.5l-.4-4.41A1 1 0 0 1 8.094 2h7.81a1 1 0 0 1 .996 1.09L16.5 7.5l2.25 4.95a1 1 0 0 1-.121 1.027L12 22l-6.629-8.523a1 1 0 0 1-.12-1.027Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7.5 7h9" />
    </svg>
  );
};
export default PenTool_02;
