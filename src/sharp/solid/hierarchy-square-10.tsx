import React from "react";
const HierarchySquare_10: React.FC<
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
        d="M1.25 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM16.25 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 11V7h2v4zm-7.5 2.5a1 1 0 0 1 1-1h5v2h-4V18h-2zm15 1h-4v-2h5a1 1 0 0 1 1 1V18h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 2A.75.75 0 0 1 8 1.25h8a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H8A.75.75 0 0 1 7.25 7zM8.75 13.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
    </svg>
  );
};
export default HierarchySquare_10;
