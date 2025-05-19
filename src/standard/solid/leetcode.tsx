import React from "react";
const Leetcode: React.FC<
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
        d="M10 13a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.707 3.707a1 1 0 0 0-1.414-1.414l-2 2-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 19.586 5.414 13 12 6.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 5z"
      />
    </svg>
  );
};
export default Leetcode;
