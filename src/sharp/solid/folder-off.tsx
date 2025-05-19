import React from "react";
const FolderOff: React.FC<
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
        d="m22.75 21.336-1.414 1.414L1.252 2.666 2.664 1.25z"
      />
      <path
        fill="currentColor"
        d="M2.249 2.25h-1v19.5h20.5zM22.75 19.215V6.245H12.39L9.374 2.25H5.784z"
      />
    </svg>
  );
};
export default FolderOff;
