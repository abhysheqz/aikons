import React from "react";
const FolderBlock: React.FC<
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
        d="M18.25 12.75a4.5 4.5 0 0 0-3.182 1.318 4.5 4.5 0 1 0 3.182-1.318m2.5 4.5q-.002.486-.172.914l-3.242-3.242a2.5 2.5 0 0 1 3.414 2.328m-4.828-.914 3.242 3.242a2.5 2.5 0 0 1-3.242-3.242"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h13.42a5.74 5.74 0 0 1-2.17-4.5 5.74 5.74 0 0 1 1.684-4.066A5.74 5.74 0 0 1 18.25 11.5a5.74 5.74 0 0 1 4.5 2.17V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderBlock;
