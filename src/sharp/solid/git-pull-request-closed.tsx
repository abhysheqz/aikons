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
        d="M5 16V8h2v8zM17 16v-5h2v5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M3.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.043 7.371 1.293 1.293L20.75 7.25l-1.293-1.293 1.293-1.293-1.414-1.414-1.293 1.293L16.75 3.25l-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitPullRequestClosed;
