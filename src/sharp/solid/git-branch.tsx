import React from "react";
const GitBranch: React.FC<
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
        d="M17.793 9.293a1 1 0 0 1 1.414 0l2.5 2.5-1.414 1.414-.793-.793V19a1 1 0 0 1-1 1H7v-2h10.5v-5.586l-.793.793-1.414-1.414zM4 17V7h2v10z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.75 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M2.25 19a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default GitBranch;
