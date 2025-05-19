import React from "react";
const FolderImport: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m17 21-3-3 3-3m-2 3h7M8 6.994h4.018m0 0H22v7.003m-9.982-7.003L9 3H2v18h9"
      />
    </svg>
  );
};
export default FolderImport;
