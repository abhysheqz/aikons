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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21.5 16 19 13.5 16.5 16m2.5 5v-6.891M8 6.994h4.018m0 0H22v4.003m-9.982-4.003L9 3H2v18h12"
      />
    </svg>
  );
};
export default FolderUpload;
