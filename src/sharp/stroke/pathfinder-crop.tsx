import React from "react";
const PathfinderCrop: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.996 9.002H9V15l5.996-.002z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1.996 12v3h4m-4-10V2h3m7 0h3v4m-13 1v3m8-8h-3M9 18v4h13V9h-4"
      />
    </svg>
  );
};
export default PathfinderCrop;
