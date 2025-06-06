import React from "react";
const FileSync: React.FC<
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
        d="M20 13V9l-7-7H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"
      />
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
        d="m11 16 1 2c.243-1.696 1.737-3 3.5-3 1.19 0 2.24.593 2.873 1.5M20 21l-1-2c-.243 1.696-1.737 3-3.5 3-1.19 0-2.24-.593-2.873-1.5"
      />
    </svg>
  );
};
export default FileSync;
