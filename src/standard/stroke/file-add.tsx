import React from "react";
const FileAdd: React.FC<
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
        d="M13 2h5a2 2 0 0 1 2 2v11.015L13 22H6.003a2 2 0 0 1-2-2.003V12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 15h-5a2 2 0 0 0-2 2v5M12 6H4m4-4v8"
      />
    </svg>
  );
};
export default FileAdd;
