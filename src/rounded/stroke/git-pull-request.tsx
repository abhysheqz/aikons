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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8v8M18 16v-4c0-2.828 0-4.243-.879-5.121C16.243 6 14.828 6 12 6h-1m0 0c0-.7 1.994-2.008 2.5-2.5M11 6c0 .7 1.994 2.008 2.5 2.5"
      />
      <circle cx={6} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={6} cy={6} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={18} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default GitPullRequest;
