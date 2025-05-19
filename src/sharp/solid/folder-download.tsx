import React from "react";
const FolderDownload: React.FC<
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
        d="M19.336 11.336v6.586l2-2 1.414 1.414-4.414 4.414-4.414-4.414 1.414-1.414 2 2v-6.586z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h15.318l-4.414-4.414 3.182-3.182.75.75v-4.818h4.5v4.818l.75-.75 1.414 1.414V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderDownload;
