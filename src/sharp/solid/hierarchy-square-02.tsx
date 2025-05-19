import React from "react";
const HierarchySquare_02: React.FC<
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
        d="M1.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM15.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 11V8h2v3h6a1 1 0 0 1 1 1v4h-2v-3H6v3H4v-4a1 1 0 0 1 1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 2A.75.75 0 0 1 8 1.25h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H8A.75.75 0 0 1 7.25 8z"
      />
    </svg>
  );
};
export default HierarchySquare_02;
