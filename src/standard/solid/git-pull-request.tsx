import React from "react";
const GitPullRequest: React.FC<
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
        d="M14.5 3.5a1 1 0 0 0-1.707-.707l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5A1 1 0 0 0 14.5 8.5V7H16a1 1 0 0 1 1 1v7.438a2.751 2.751 0 1 0 2 0V8a3 3 0 0 0-3-3h-1.5zM6 3.25a2.75 2.75 0 0 0-1 5.313v6.874a2.75 2.75 0 1 0 2 0V8.564A2.751 2.751 0 0 0 6 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitPullRequest;
