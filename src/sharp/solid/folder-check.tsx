import React from "react";
const FolderCheck: React.FC<
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
        d="m22.75 14.14-6.341 7.61-3.481-3.482 1.414-1.414 1.932 1.932 4.94-5.927z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5H14.64l-3.481-3.482 3.182-3.182 1.849 1.85 4.863-5.836 1.696 1.413V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderCheck;
