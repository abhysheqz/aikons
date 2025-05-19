import React from "react";
const FolderPin: React.FC<
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
        d="M19.75 21.75h-1.5v-3h-3v-1.5l1.449-1.932-.614-3.068h5.83l-.614 3.068 1.449 1.932v1.5h-3z"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H17V20h-3v-3.167l1.364-1.818L14.56 11h8.19V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderPin;
