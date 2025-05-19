import React from "react";
const GitPullRequestClosed: React.FC<
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
        d="M16.707 3.293a1 1 0 1 0-1.414 1.414L16.586 6l-1.293 1.293a1 1 0 0 0 1.414 1.414L18 7.414l1.293 1.293a1 1 0 1 0 1.414-1.414L19.414 6l1.293-1.293a1 1 0 0 0-1.414-1.414L18 4.586zM6 3.25a2.75 2.75 0 0 0-1 5.313v6.874a2.75 2.75 0 1 0 2 0V8.564A2.751 2.751 0 0 0 6 3.25m13 8.25a1 1 0 1 0-2 0v3.938a2.751 2.751 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitPullRequestClosed;
