import React from "react";
const FolderAttachment: React.FC<
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
        d="M8 6.994h4.018m0 0H22v5.003m-9.982-5.003L9 3H2v18h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 15.462v2.461c0 1.7-1.343 3.077-3 3.077s-3-1.378-3-3.077V14.54c0-.85.672-1.539 1.5-1.539s1.5.689 1.5 1.539v3.384"
      />
    </svg>
  );
};
export default FolderAttachment;
