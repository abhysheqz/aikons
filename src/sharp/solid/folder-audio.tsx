import React from "react";
const FolderAudio: React.FC<
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
        d="M21.273 12.25h1.477v9.5h-1.477l-3-2.25H14.25v-5h4.023z"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H13v-8.5h4.856l3-2.25h1.894V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderAudio;
