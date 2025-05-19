import React from "react";
const FolderEdit: React.FC<
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
        d="M19.69 11.94 22.75 15 16 21.75h-3.06v-3.06z"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h10.44v-3.578l8-8 3.06 3.06V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderEdit;
