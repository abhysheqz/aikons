import React from "react";
const FileSearch: React.FC<
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
        d="M10.336 16.764a4.429 4.429 0 1 1 8.187 2.344l2.227 2.228-1.414 1.414-2.228-2.228a4.429 4.429 0 0 1-6.772-3.758m4.429-2.428a2.429 2.429 0 1 0 0 4.857 2.429 2.429 0 0 0 0-4.857"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.25 22.75.001-21.5h10.11l7.389 7.379v5.38h-1.02a5.679 5.679 0 1 0-7.71 7.729v1.012zM18.8 9.46l-6.238-6.255V9.46z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileSearch;
