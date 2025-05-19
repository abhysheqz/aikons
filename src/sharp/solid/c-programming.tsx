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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm13.198 6.206c-1.99-1.941-5.206-1.941-7.195 0a4.93 4.93 0 0 0 0 7.088c1.99 1.941 5.206 1.941 7.195 0l-1.396-1.431a3.174 3.174 0 0 1-4.403 0 2.93 2.93 0 0 1 0-4.226 3.174 3.174 0 0 1 4.403 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CProgramming;
