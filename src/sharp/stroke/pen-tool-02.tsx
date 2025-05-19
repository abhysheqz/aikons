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
        d="M16.421 7.008 16.998 2h-10l.58 5.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.424 6.982H7.585l-2.589 6.014 7.011 8.991a.01.01 0 0 0 .016 0l6.971-8.972z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 12.997h-2m0 0h-2m2 0v8.494"
      />
    </svg>
  );
};
export default PenTool_02;
