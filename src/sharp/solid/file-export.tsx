import React from "react";
const FileExport: React.FC<
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
        d="m16.336 13.922 4.414 4.414-4.414 4.414-1.414-1.414 2-2h-6.586v-2h6.586l-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.251 1.25-.001 21.5h11.318l-1.414-1.414.75-.75H9.086v-4.5h4.818l-.75-.75 3.182-3.182 4.414 4.414V8.63l-7.39-7.38zm9.311 1.955L18.8 9.46h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileExport;
