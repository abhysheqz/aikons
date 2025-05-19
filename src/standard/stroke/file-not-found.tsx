import React from "react";
const FileNotFound: React.FC<
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
        d="M15 15a2 2 0 0 0-2 2v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20M6.025 2h11.972a2 2 0 0 1 2 2v11.015l-.492.49M4.025 3.997 4 19.998a2 2 0 0 0 2 2.003h6.996l4.507-4.498"
      />
    </svg>
  );
};
export default FileNotFound;
