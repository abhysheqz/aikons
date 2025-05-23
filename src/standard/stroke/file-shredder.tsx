import React from "react";
const FileShredder: React.FC<
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
        d="M22 12.998H2M4 12.998l.014-9.001A2 2 0 0 1 6.016 2l6.976.008L20 8.995v4.003m-7.003-10.5v4.5a2 2 0 0 0 2 2H19.5M6 15.998v1m4-1v6m4-6v2m4-2v4"
      />
    </svg>
  );
};
export default FileShredder;
