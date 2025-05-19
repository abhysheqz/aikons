import React from "react";
const FileBlock: React.FC<
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
        d="M13 21.5V15h6.5M14 2h6v13l-7 7H4V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.975 7.975a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95-4.95-4.95"
      />
    </svg>
  );
};
export default FileBlock;
