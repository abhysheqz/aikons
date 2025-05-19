import React from "react";
const FolderVideo: React.FC<
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
        d="M12.25 14.25h7.5v2.25l1.542-1.25h1.458v5.5h-1.458l-1.542-.925v1.925h-7.5z"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H11V13h10v1h1.75V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderVideo;
