import React from "react";
const FolderDetailsReference: React.FC<
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
        d="M22 12V6.994h-9.982M8 6.994h4.018m0 0L9 3H2v18M22 15h-7m7 3h-7m2.5 3H15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6 15h5v5m-6 1 5.5-5.5"
      />
    </svg>
  );
};
export default FolderDetailsReference;
