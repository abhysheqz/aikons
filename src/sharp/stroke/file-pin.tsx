import React from "react";
const FilePin: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 2.5V9h6.5m.5 2V9l-7-7H4v20h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 19h-3v-.5l1.5-2L15 14h4l-.5 2.5 1.5 2v.5zm0 0v3"
      />
    </svg>
  );
};
export default FilePin;
