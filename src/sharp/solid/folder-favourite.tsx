import React from "react";
const FolderFavourite: React.FC<
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
        d="M21.1 12.643c-2.095-1.13-3.6.536-3.6.536s-1.505-1.666-3.6-.536c-2.539 1.369-2.72 6.728 3.6 9.107 6.32-2.38 6.139-7.738 3.6-9.107"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H14.7c-1.985-1.275-3.135-2.937-3.539-4.645-.526-2.226.268-4.55 2.145-5.562 1.443-.778 2.752-.602 3.675-.204q.286.126.519.266.232-.14.52-.266c.922-.398 2.23-.574 3.674.204.402.217.755.495 1.056.819V6.243H12.391z"
      />
    </svg>
  );
};
export default FolderFavourite;
