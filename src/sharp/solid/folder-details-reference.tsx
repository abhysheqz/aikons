import React from "react";
const FolderDetailsReference: React.FC<
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
        d="M13.75 13.336h9v2h-9zm0 3h9v2h-9zm0 3h4.5v2h-4.5zM4.75 13.336h7v7h-2V16.75l-5 5-1.414-1.414 5-5H4.75z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M9.373 2.25H1.25v9.836h21.5V6.244H12.391z" />
    </svg>
  );
};
export default FolderDetailsReference;
