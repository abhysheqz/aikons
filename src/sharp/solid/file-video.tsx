import React from "react";
const FileVideo: React.FC<
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
        d="M11.25 15.25h7.5v1.925l1.542-.925h1.458v5.5h-1.458l-1.542-.925v1.925h-7.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.251 1.25-.001 21.5H10V14h9.75V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileVideo;
