import React from "react";
const FileValidation: React.FC<
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
        strokeWidth={1.5}
        d="M11 2H2.01a.01.01 0 0 0-.01.01V15m0 0 7 7m-7-7h7v7m0 0h9.99a.01.01 0 0 0 .01-.01V14M14.75 7l1.5 1.5 3-3M22 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default FileValidation;
