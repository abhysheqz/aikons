import React from "react";
const FileCloud: React.FC<
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
        d="M14 2h4a2 2 0 0 1 2 2v11.015L12.999 22H6a2 2 0 0 1-2-2V12"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 15h-5a2 2 0 0 0-2 2v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6.667C4 7.955 5.007 9 6.25 9h4.725C12.093 9 13 8.06 13 6.9s-.917-2.1-2.035-2.1C11.09 3.364 9.98 2 8.5 2 7.205 2 6.143 3.03 6.034 4.344 4.893 4.457 4 5.454 4 6.667"
      />
    </svg>
  );
};
export default FileCloud;
