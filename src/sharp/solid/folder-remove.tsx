import React from "react";
const FolderRemove: React.FC<
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
        d="m15.336 12.922 3 3 3-3 1.414 1.414-3 3 3 3-1.414 1.414-3-3-3 3-1.414-1.414 3-3-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h12.318l-1.414-1.414 3-3-3-3 3.182-3.182 3 3 3-3 1.414 1.414V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderRemove;
