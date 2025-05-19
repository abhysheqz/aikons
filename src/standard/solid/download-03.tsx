import React from "react";
const Download_03: React.FC<
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
        d="M6.448 9.684a1 1 0 0 1-.633 1.265l-1.074.357a1 1 0 0 0-.627 1.28L6.24 18.66A2 2 0 0 0 8.128 20h7.743a2 2 0 0 0 1.887-1.34l2.127-6.074a1 1 0 0 0-.628-1.28l-1.074-.357a1 1 0 0 1 .632-1.898l1.075.358a3 3 0 0 1 1.882 3.837l-2.126 6.075A4 4 0 0 1 15.871 22H8.128a4 4 0 0 1-3.776-2.679l-2.126-6.075A3 3 0 0 1 4.109 9.41l1.074-.358a1 1 0 0 1 1.265.633"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a1 1 0 0 1 1 1v7.5h1.5a1 1 0 0 1 .707 1.707l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5A1 1 0 0 1 9.5 10.5H11V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Download_03;
