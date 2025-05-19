import React from "react";
const HierarchySquare_06: React.FC<
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
        d="M7.25 2A.75.75 0 0 1 8 1.25h8a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H8A.75.75 0 0 1 7.25 7zM1.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM16.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75zM8.75 12.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 10V7h2v3zm-7.125 6.22 5-4 1.25 1.56-5 4zm15 1.56-5-4 1.25-1.56 5 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HierarchySquare_06;
