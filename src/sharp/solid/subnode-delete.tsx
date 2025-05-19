import React from "react";
const SubnodeDelete: React.FC<
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
        fillRule="evenodd"
        d="M6.5 8h2v2.5h5v2h-5v6h6v2h-7a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.75 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM2.75 2a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-8A.75.75 0 0 1 2.75 8z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.5 12.914 1.293 1.293 1.414-1.414-1.293-1.293 1.293-1.293-1.414-1.414-1.293 1.293-1.293-1.293-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SubnodeDelete;
