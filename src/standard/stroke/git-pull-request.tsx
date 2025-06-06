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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8.273v8"
      />
      <circle
        cx={6}
        cy={18.023}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={6}
        cy={6.023}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={18}
        cy={18.023}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        fill="currentColor"
        d="m11 6.023-.53-.53a.75.75 0 0 0 0 1.06zm3.03-1.97a.75.75 0 0 0-1.06-1.06zm-1.06 5a.75.75 0 1 0 1.06-1.06zM12 5.274a.75.75 0 0 0 0 1.5zm6.75 10.75v-8h-1.5v8zm-7.22-9.47 2.5-2.5-1.06-1.06-2.5 2.5zm2.5 1.44-2.5-2.5-1.06 1.06 2.5 2.5zM16 5.273h-4v1.5h4zm2.75 2.75A2.75 2.75 0 0 0 16 5.273v1.5c.69 0 1.25.56 1.25 1.25z"
      />
    </svg>
  );
};
export default GitPullRequest;
