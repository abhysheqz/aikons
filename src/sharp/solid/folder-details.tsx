import React from "react";
const FolderDetails: React.FC<
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
        d="M13.75 13.75h9v2h-9zm0 3h9v2h-9zm0 3h4.5v2h-4.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H12.5V12.5h10.25V6.244H12.391z"
      />
    </svg>
  );
};
export default FolderDetails;
