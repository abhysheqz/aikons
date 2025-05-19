import React from "react";
const FileZip: React.FC<
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
        d="M4 22V2h9l7 7v13h-6M13 2.5V9h6.5M7.5 5.5H7m3 2h-.5m-2 2H7m3 2.023h-.5m-2 1.977H7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 22v-3a2 2 0 1 0-4 0v3z"
      />
    </svg>
  );
};
export default FileZip;
