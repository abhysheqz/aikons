import React from "react";
const FileVerified: React.FC<
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
        d="m20.75 15.336-7.414 7.414-3.414-3.414 1.414-1.414 2 2 6-6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.251 1.25-.001 21.5h8.318l-3.414-3.414 3.182-3.182 2 2 6-6 1.414 1.414V8.629l-7.39-7.38zm9.311 1.955L18.8 9.46h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileVerified;
