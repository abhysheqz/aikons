import React from "react";
const FileZip: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 22.75.001-21.5h10.11l7.389 7.38v14.12h-7.754V19a4 4 0 0 0-8 0v3.75zM18.8 9.46l-6.238-6.255V9.46zM8.245 3.75h-2v1.5h2zm2.5 2h-2v1.5h2zm-2.5 2h-2v1.5h2zm2.5 2.023h-2v1.5h2zm-2.5 1.977h-2v1.5h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.246 19a2.75 2.75 0 1 1 5.5 0v3.75h-5.5z"
      />
    </svg>
  );
};
export default FileZip;
