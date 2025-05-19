import React from "react";
const Tree_01: React.FC<
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
        d="M3.25 10a8.75 8.75 0 1 1 9.5 8.718v-3.407l2.28-2.28a.75.75 0 1 0-1.06-1.061l-1.22 1.22V9a.75.75 0 0 0-1.5 0v2.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.28 2.28v5.408a8.75 8.75 0 0 1-8-8.718m8 11.25V18.72a9 9 0 0 0 1.5 0v2.531H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 1 1 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tree_01;
