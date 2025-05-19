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
        d="M6 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M3.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.5 6A1.5 1.5 0 0 1 18 4.5h.009a1.5 1.5 0 0 1 0 3H18A1.5 1.5 0 0 1 16.5 6m0 5A1.5 1.5 0 0 1 18 9.5h.009a1.5 1.5 0 0 1 0 3H18a1.5 1.5 0 0 1-1.5-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitPullRequestDraft;
