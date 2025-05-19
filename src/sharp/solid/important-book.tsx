import React from "react";
const ImportantBook: React.FC<
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
        d="M4.25 2A.75.75 0 0 1 5 1.25h17a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-3h-3v-2h3v-4h-3v-2h3V7h-3V5h3zm5 10a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.259 9.002-.009 3.5-1.5-.004.009-3.5zM12.75 13.75h1.509v1.5H12.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ImportantBook;
