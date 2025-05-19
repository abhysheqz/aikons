import React from "react";
const ModernTvIssue: React.FC<
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
        d="M16 22.25H8v-1.5h8zM1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm9.75 10h2.009v2H11zm2-1v-5h-2v5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ModernTvIssue;
