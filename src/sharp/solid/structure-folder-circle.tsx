import React from "react";
const StructureFolderCircle: React.FC<
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
        d="M1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M15.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.001 13a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v3h-2v-2H6v2H4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.75 2a.75.75 0 0 1 .75-.75h3.31l2 2h3.69a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default StructureFolderCircle;
