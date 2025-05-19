import React from "react";
const FileYen: React.FC<
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
        d="m15 12.5 3 4m0 0 3-4m-3 4v6m3-4h-6"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M10 1.5v7H3" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.968 10.484V1.512a.01.01 0 0 0-.01-.01H9.957L3 8.487v13.001q0 .01.01.01h9.97"
      />
    </svg>
  );
};
export default FileYen;
