import React from "react";
const FolderFileStorage: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M19 13h-4v8h7v-5z" />
    </svg>
  );
};
export default FolderFileStorage;
