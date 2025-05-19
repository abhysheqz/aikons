import React from "react";
const HierarchySquare_05: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2A.75.75 0 0 1 1.25 8zM1.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM14.25 9a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 6H9V4h3a1 1 0 0 1 1 1v6h2v2h-2v6a1 1 0 0 1-1 1H9v-2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_05;
