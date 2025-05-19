import React from "react";
const Hierarchy: React.FC<
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
        d="M9.75 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M8.25 10.5a3.75 3.75 0 1 1 7.5 0v.75h-7.5zM2.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M1.25 22a3.75 3.75 0 1 1 7.5 0v.75h-7.5zM16.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M15.25 22a3.75 3.75 0 1 1 7.5 0v.75h-7.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 14.934V13h2v1.934l2.015 1.208-1.03 1.716L12 16.666l-1.985 1.192-1.03-1.716z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hierarchy;
