import React from "react";
const CProgramming: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21V3H3v18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 9.172c-1.601-1.563-4.198-1.563-5.799 0a3.93 3.93 0 0 0 0 5.656c1.601 1.563 4.198 1.563 5.799 0"
      />
    </svg>
  );
};
export default CProgramming;
