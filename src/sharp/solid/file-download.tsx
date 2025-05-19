import React from "react";
const FileDownload: React.FC<
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
        d="M8.664 1.25v6.586l2-2L12.08 7.25l-4.415 4.414L3.25 7.25l1.414-1.414 2 2V1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 9.018.001 13.732h10.11l7.389-7.38V1.25H9.914v3.568l.75-.75 3.182 3.182-6.182 6.182zm9.312 11.777L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileDownload;
