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
        d="M18.543 12.543a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414l-.793-.793v5.086a1 1 0 1 1-2 0v-5.086l-.793.793a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h13v-3.764a2.25 2.25 0 0 1-1.841-3.827l2.5-2.5a2.25 2.25 0 0 1 3.182 0l1.909 1.909V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderUpload;
