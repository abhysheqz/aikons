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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 16 19 13.5 16.5 16m2.5 5v-6.891M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V11m-9.982-4.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h9.5"
      />
    </svg>
  );
};
export default FolderUpload;
