import React from "react";
const GitPullRequestDraft: React.FC<
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
        d="M6 3.25a2.75 2.75 0 0 0-1 5.313v6.874a2.75 2.75 0 1 0 2 0V8.564A2.751 2.751 0 0 0 6 3.25M15.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M18 4.5a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3zm0 5a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitPullRequestDraft;
