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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6.994h4.018m0 0H20a2 2 0 0 1 2 2V12m-9.982-5.006L9.3 3.397A1 1 0 0 0 8.502 3H3a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h9.018M21 15.462v2.461c0 1.7-1.343 3.077-3 3.077s-3-1.378-3-3.077V14.54c0-.85.672-1.539 1.5-1.539s1.5.689 1.5 1.539v3.384"
      />
    </svg>
  );
};
export default FolderAttachment;
