import React from "react";
const FolderSearch: React.FC<
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
        d="M12.336 15.765a4.429 4.429 0 1 1 8.187 2.343l2.227 2.228-1.414 1.414-2.228-2.228a4.429 4.429 0 0 1-6.772-3.758m4.429-2.43a2.429 2.429 0 1 0 0 4.858 2.429 2.429 0 0 0 0-4.857"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.373 2.25H1.25v19.5h11.77v-1.716a5.678 5.678 0 1 1 8.02-8.006h1.71V6.244H12.39z"
      />
    </svg>
  );
};
export default FolderSearch;
