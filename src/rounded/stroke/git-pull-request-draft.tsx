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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8v8"
      />
      <circle cx={6} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={6} cy={6} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={18} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 11h.009M18 6h.009"
      />
    </svg>
  );
};
export default GitPullRequestDraft;
