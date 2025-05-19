import React from "react";
const FolderLinks: React.FC<
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
        d="M14.099 14.099a1.19 1.19 0 0 1 1.684 0l1.061-1.06a2.691 2.691 0 0 0-3.806 3.805l1.716 1.716a2.69 2.69 0 0 0 3.659.136l-.98-1.136a1.19 1.19 0 0 1-1.618-.06l-1.716-1.717a1.19 1.19 0 0 1 0-1.684"
      />
      <path
        fill="currentColor"
        d="M16.567 16.44a1.19 1.19 0 0 1 1.618.06l1.716 1.717a1.191 1.191 0 0 1-1.684 1.684l-1.061 1.06a2.691 2.691 0 0 0 3.806-3.805l-1.716-1.716a2.69 2.69 0 0 0-3.659-.136z"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h14.927l-4.022-4.022a3.941 3.941 0 0 1 5.573-5.574l5.022 5.022V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderLinks;
