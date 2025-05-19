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
        d="M7.75 1.25a4.5 4.5 0 0 0-3.182 1.318A4.5 4.5 0 1 0 7.75 1.25m2.5 4.5q-.002.486-.172.914L6.836 3.422A2.5 2.5 0 0 1 10.25 5.75m-4.828-.914 3.242 3.242a2.5 2.5 0 0 1-3.242-3.242"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.33 1.25a5.74 5.74 0 0 1 2.17 4.5 5.74 5.74 0 0 1-1.684 4.066A5.74 5.74 0 0 1 7.75 11.5a5.74 5.74 0 0 1-4.5-2.17l.001 13.42h10.11l7.389-7.38V1.25zm1.232 19.545L18.8 14.54h-6.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FileBlock;
