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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 2v5a2 2 0 0 0 2 2h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 22h4a2 2 0 0 0 2-2V9l-7-7H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3.032a1 1 0 0 0 .768-.36L12 19l-2.5-2.5L12 14l-2-2"
      />
    </svg>
  );
};
export default FileCorrupt;
