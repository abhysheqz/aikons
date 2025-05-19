import React from "react";
const FolderShared_02: React.FC<
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
        d="m19.752 14.16-3.678 1.838a1.5 1.5 0 1 0 .002 2.502l3.676 1.838a1.5 1.5 0 1 0 .672-1.34l-3.497-1.75 3.495-1.747a1.5 1.5 0 1 0-.67-1.342"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h14.944a2.7 2.7 0 0 1-.279-.557l-2.62-1.31a2.753 2.753 0 0 1-3.549-2.633 2.75 2.75 0 0 1 3.546-2.633l2.624-1.312a2.75 2.75 0 0 1 4.084-1.36v-2.95A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderShared_02;
