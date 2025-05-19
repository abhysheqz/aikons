import React from "react";
const FileSearch: React.FC<
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
        d="m20 22-2.147-2.147m0 0a3.43 3.43 0 0 0 1.004-2.424 3.429 3.429 0 1 0-1.004 2.424"
      />
    </svg>
  );
};
export default FileSearch;
