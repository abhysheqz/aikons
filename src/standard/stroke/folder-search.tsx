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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V11m-9.982-4.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h8.018M22 21l-2.147-2.147m0 0a3.43 3.43 0 0 0 1.004-2.424 3.429 3.429 0 1 0-1.004 2.424"
      />
    </svg>
  );
};
export default FolderSearch;
