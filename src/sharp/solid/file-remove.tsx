import React from "react";
const FileRemove: React.FC<
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
        d="m4.664 1.25 3.5 3.5 3.5-3.5 1.415 1.414-3.5 3.5 3.5 3.5-1.415 1.414-3.5-3.5-3.5 3.5L3.25 9.664l3.5-3.5-3.5-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 11.433.001 11.317h10.11l7.389-7.38V1.25h-7.318l1.414 1.414-3.5 3.5 3.5 3.5-3.182 3.182-3.5-3.5-3.5 3.5zm9.312 9.362L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileRemove;
