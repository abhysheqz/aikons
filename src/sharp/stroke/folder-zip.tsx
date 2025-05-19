import React from "react";
const FolderZip: React.FC<
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
        d="M8 6.994h4.018m0 0L9 3H2v18h20V6.994h-3.5m-6.482 0H15v4.003M15 15h-2m2 0h2m-2 0v-4.003m0 0h-2m2 0h2"
      />
    </svg>
  );
};
export default FolderZip;
