import React from "react";
const HierarchySquare_03: React.FC<
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
        d="M1.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM15.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM7.25 2A.75.75 0 0 1 8 1.25h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 14v2H4v-3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_03;
