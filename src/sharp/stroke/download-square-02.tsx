import React from "react";
const DownloadSquare_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3H3v18h18z"
      />
      <path
        fill="currentColor"
        d="m12 14-.493.565.493.43.493-.43zm-4 3.75h8v-1.5H8zm6.007-6.498-2.5 2.183.986 1.13 2.5-2.184zm-1.514 2.183-2.5-2.183-.986 1.13 2.5 2.183zm.257.14V7h-1.5v6.575z"
      />
    </svg>
  );
};
export default DownloadSquare_02;
