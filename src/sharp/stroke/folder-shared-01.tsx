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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.248 13.75a1.75 1.75 0 1 1-3.501 0 1.75 1.75 0 0 1 3.5 0ZM22 21h-7c0-1.657 1.567-3 3.5-3s3.5 1.343 3.5 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H22v3.003m-9.982-3.003L9 3H2v18h10"
      />
    </svg>
  );
};
export default FolderShared_01;
