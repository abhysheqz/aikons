import React from "react";
const FolderExport: React.FC<
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
        d="m19 21 3-3-3-3m2 3h-7M8 6.994h4.018m0 0H22v5.003m-9.982-5.003L9 3H2v18h9"
      />
    </svg>
  );
};
export default FolderExport;
