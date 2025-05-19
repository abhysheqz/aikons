import React from "react";
const FileCorrupt: React.FC<
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
        d="m11 12 2 2-2.5 2.5L13 19l-3 3H4V2h9l7 7v13h-5M13 2.5V9h6.5"
      />
    </svg>
  );
};
export default FileCorrupt;
