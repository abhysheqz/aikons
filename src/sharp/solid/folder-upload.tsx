import React from "react";
const FolderUpload: React.FC<
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
        d="m18.836 11.836 3.914 3.914-1.414 1.414-1.5-1.5v6.086h-2v-6.086l-1.5 1.5-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h15.336v-2.568l-3.432-3.432 5.682-5.682 3.914 3.914V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderUpload;
