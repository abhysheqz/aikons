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
        d="M5 16.229v-8h2v8zM13.414 7.229l.793.792-1.414 1.415-2.5-2.5a1 1 0 0 1 0-1.415l2.5-2.5 1.414 1.415-.793.793H18a1 1 0 0 1 1 1v10h-2v-9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 18.229a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M3.25 6.229a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.25 18.229a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default GitPullRequest;
