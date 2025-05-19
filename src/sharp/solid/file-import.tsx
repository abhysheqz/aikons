import React from "react";
const FileImport: React.FC<
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
        d="m16.164 15.336-2 2h6.586v2h-6.586l2 2-1.414 1.414-4.414-4.414 4.414-4.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.251 1.25-.001 21.5h9.732l-4.414-4.414 6.182-6.182 3.182 3.182-.75.75h3.568V8.63l-7.39-7.38zm9.311 1.955L18.8 9.46h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileImport;
