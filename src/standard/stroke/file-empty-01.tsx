import React from "react";
const FileEmpty_01: React.FC<
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
        d="M12.996 22.002H6a2 2 0 0 1-2-2.004l.025-16.001a2 2 0 0 1 2-1.997h11.972a2 2 0 0 1 2 2v11.015z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 15h-5a2 2 0 0 0-2 2v5"
      />
    </svg>
  );
};
export default FileEmpty_01;
