import React from "react";
const FolderFileStorage: React.FC<
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
      <path fill="currentColor" d="M14.25 12.25h5.06l3.44 3.44v6.06h-8.5z" />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H13V11h6.828l2.922 2.922V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderFileStorage;
