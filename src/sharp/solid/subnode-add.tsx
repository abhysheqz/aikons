import React from "react";
const SubnodeAdd: React.FC<
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
        d="M6.5 8h2v2.5H13v2H8.5v6h6v2h-7a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.75 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM2.75 2a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-8A.75.75 0 0 1 2.75 8z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 10.5V9h2v1.5H20v2h-1.5V14h-2v-1.5H15v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SubnodeAdd;
