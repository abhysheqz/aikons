import React from "react";
const FolderAdd: React.FC<
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
        fillRule="evenodd"
        d="M18.75 11.75v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H15.5V19h-4v-4.5h4v-4H20v4h2.75V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderAdd;
