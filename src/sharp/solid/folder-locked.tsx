import React from "react";
const FolderLocked: React.FC<
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
        d="M21 14.75v-1a2.5 2.5 0 0 0-5 0v1h-1.75v7h8.5v-7zm-3.5-1a1 1 0 1 1 2 0v1h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H13V13.5h1.758a3.75 3.75 0 0 1 7.484 0h.508V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderLocked;
