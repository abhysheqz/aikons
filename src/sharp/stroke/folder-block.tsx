import React from "react";
const FolderBlock: React.FC<
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
        d="M8 6.994h4.018m0 0H22v4.003m-9.982-4.003L9 3H2v18h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.975 19.975a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95-4.95-4.95"
      />
    </svg>
  );
};
export default FolderBlock;
