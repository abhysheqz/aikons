import React from "react";
const FolderExport: React.FC<
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
        d="m18.336 12.922 4.414 4.414-4.414 4.414-1.414-1.414 2-2h-6.586v-2h6.586l-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h15.317l-1.413-1.414.75-.75h-4.818v-4.5h4.818l-.75-.75 3.182-3.182 4.414 4.414V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderExport;
