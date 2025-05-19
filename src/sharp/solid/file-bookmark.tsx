import React from "react";
const FileBookmark: React.FC<
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
      <path fill="currentColor" d="M3.248 1.25h7.5v9.151l-3.75-2.5-3.75 2.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.252 11.9.001 10.85h10.11l7.389-7.38V1.25h-8.754v11.487l-5-3.333zm9.312 8.895 6.237-6.255h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileBookmark;
