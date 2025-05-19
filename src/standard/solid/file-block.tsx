import React from "react";
const FileBlock: React.FC<
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
        d="M7.75 1.252A4.5 4.5 0 0 0 4.568 2.57 4.5 4.5 0 1 0 7.75 1.252m2.5 4.5q-.002.486-.172.914L6.836 3.424a2.5 2.5 0 0 1 3.414 2.328m-4.828-.914L8.664 8.08a2.5 2.5 0 0 1-3.242-3.242"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.266 9.352 3.25 19.816a2.925 2.925 0 0 0 2.917 2.936h6.803a.97.97 0 0 0 .686-.286l6.809-6.827a.98.98 0 0 0 .285-.692V4.184a2.924 2.924 0 0 0-2.917-2.932H11.33a5.74 5.74 0 0 1 2.17 4.5 5.74 5.74 0 0 1-1.684 4.066 5.74 5.74 0 0 1-4.066 1.684 5.74 5.74 0 0 1-4.484-2.15m9.301 11.444 6.237-6.255h-4.737a1.5 1.5 0 0 0-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileBlock;
