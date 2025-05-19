import React from "react";
const PathfinderMerge: React.FC<
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
        d="M2 1.25a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h4.75V10h1.5v12c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-6.25V2a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default PathfinderMerge;
