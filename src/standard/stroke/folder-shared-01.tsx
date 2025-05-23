import React from "react";
const FolderShared_01: React.FC<
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
        d="M22 21v.75a.75.75 0 0 0 .75-.75zm-7.004 0h-.75c0 .414.336.75.75.75zM22 20.25h-7.003v1.5H22zm-6.253.75a2.75 2.75 0 0 1 2.752-2.75v-1.5A4.25 4.25 0 0 0 14.246 21zm2.752-2.75A2.75 2.75 0 0 1 21.249 21h1.5a4.25 4.25 0 0 0-4.251-4.25zm1-4.5a1 1 0 0 1-1.001 1v1.5a2.5 2.5 0 0 0 2.5-2.5zm-1.001 1a1 1 0 0 1-1-1h-1.5a2.5 2.5 0 0 0 2.5 2.5zm-1-1a1 1 0 0 1 1-1v-1.5a2.5 2.5 0 0 0-2.5 2.5zm1-1a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V10m-9.982-3.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h8.018"
      />
    </svg>
  );
};
export default FolderShared_01;
