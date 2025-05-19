import React from "react";
const HierarchySquare_01: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 8zM13.25 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM13.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 8h2v2.5h6v2H8v6h6v2H7a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_01;
