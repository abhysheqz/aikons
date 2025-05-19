import React from "react";
const FolderLibrary: React.FC<
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
        d="M2 9.75h20l-3.951 12.5H5.952zM19.75 5.75H4.25V8.5h15.5zM17.25 1.75H6.75V4.5h10.5z"
      />
    </svg>
  );
};
export default FolderLibrary;
