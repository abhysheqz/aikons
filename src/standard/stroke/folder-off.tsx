import React from "react";
const FolderOff: React.FC<
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
        d="M7 3h1.004a2 2 0 0 1 1.596.794l2.418 3.2H20a2 2 0 0 1 2 2V18m-1 3H4a2 2 0 0 1-2-2V4.75c0-.698.409-1.3 1-1.582M2 2l20 20"
      />
    </svg>
  );
};
export default FolderOff;
