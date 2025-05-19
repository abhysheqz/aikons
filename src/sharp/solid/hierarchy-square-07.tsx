import React from "react";
const HierarchySquare_07: React.FC<
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
        d="M15.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM1.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.001 14a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v3h-2v-2H6v2H4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.75 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M8.25 10.5a3.75 3.75 0 1 1 7.5 0v.75h-7.5z"
      />
    </svg>
  );
};
export default HierarchySquare_07;
