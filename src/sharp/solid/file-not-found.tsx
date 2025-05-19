import React from "react";
const FileNotFound: React.FC<
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
        fill="currentColor"
        d="m22.75 21.336-1.415 1.414L1.251 2.666 2.663 1.25z"
      />
      <path
        fill="currentColor"
        d="M3.252 22.75 3.251 3.253 14.538 14.54h-1.975v6.255l4.11-4.121 1.385 1.386-4.696 4.69zM19.827 16.293 4.784 1.25H20.75v14.12z"
      />
    </svg>
  );
};
export default FileNotFound;
