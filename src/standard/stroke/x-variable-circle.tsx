import React from "react";
const XVariableCircle: React.FC<
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 9.5h.5c.454 0 .928.268 1.132.691L12 12m0 0 .868 1.809c.204.424.678.691 1.132.691h.5M12 12l-1.08 1.5a2.37 2.37 0 0 1-1.92 1m3-2.5 1.08-1.5a2.37 2.37 0 0 1 1.92-1"
      />
    </svg>
  );
};
export default XVariableCircle;
