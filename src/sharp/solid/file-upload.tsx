import React from "react";
const FileUpload: React.FC<
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
        d="m7.664 1.25 4.415 4.414-1.415 1.414-2-2v6.586h-2V5.078l-2 2L3.25 5.664z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m9.914 8.096.75.75 3.182-3.182L9.432 1.25H20.75v14.12l-7.39 7.38H3.252V7.432l1.413 1.414.75-.75v4.818h4.5zm2.648 12.699L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileUpload;
