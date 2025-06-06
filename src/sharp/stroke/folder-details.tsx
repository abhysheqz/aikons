import React from "react";
const FolderDetails: React.FC<
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
        d="M8 6.994h4.018m0 0H22v4.003m-9.982-4.003L9 3H2v18h9M22 15h-7m7 3h-7m2.5 3H15"
      />
    </svg>
  );
};
export default FolderDetails;
