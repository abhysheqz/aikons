import React from "react";
const FolderShared_02: React.FC<
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
        strokeWidth={1.5}
        d="M19.157 14.171a1.5 1.5 0 1 0 2.684-1.343 1.5 1.5 0 0 0-2.684 1.343Zm0 0-3.318 1.658m0 0a1.501 1.501 0 1 0 0 1.342m0-1.342a1.5 1.5 0 0 1 0 1.342m0 0 3.318 1.658m0 0a1.5 1.5 0 1 0 2.684 1.341 1.5 1.5 0 0 0-2.684-1.341Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H20c1.105 0 2 .901 2 2.006v0m-9.982-2.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h8.018"
      />
    </svg>
  );
};
export default FolderShared_02;
