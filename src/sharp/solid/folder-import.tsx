import React from "react";
const FolderImport: React.FC<
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
        d="m18.164 14.336-2 2h6.586v2h-6.586l2 2-1.414 1.414-4.414-4.414 4.414-4.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h13.732l-4.414-4.414 6.182-6.182 3.182 3.182-.75.75h3.568V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderImport;
