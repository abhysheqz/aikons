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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 13.374H2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.254 14.126.001-12.5h10.11l7.389 7.38v5.12zm15.55-4.29-6.238-6.255v6.255zM7 15.5v2.624H5V15.5zm4 0v7.624H9V15.5zm4 0v3.624h-2V15.5zm4 0v5.624h-2V15.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileShredder;
