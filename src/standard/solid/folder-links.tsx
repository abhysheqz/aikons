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
        d="M15.099 14.099a1.19 1.19 0 0 1 1.684 0 .75.75 0 1 0 1.061-1.06 2.691 2.691 0 1 0-3.806 3.805l1.716 1.716a2.69 2.69 0 0 0 3.659.136.75.75 0 1 0-.98-1.136 1.19 1.19 0 0 1-1.618-.06l-1.716-1.717a1.19 1.19 0 0 1 0-1.684"
      />
      <path
        fill="currentColor"
        d="M17.567 16.44a1.19 1.19 0 0 1 1.618.06l1.716 1.717a1.191 1.191 0 0 1-1.684 1.684.75.75 0 0 0-1.061 1.06 2.691 2.691 0 0 0 3.806-3.805l-1.716-1.716a2.69 2.69 0 0 0-3.659-.136.75.75 0 1 0 .98 1.136"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h13.177l-4.023-4.022a3.941 3.941 0 0 1 5.574-5.574l4.022 4.022V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderLinks;
