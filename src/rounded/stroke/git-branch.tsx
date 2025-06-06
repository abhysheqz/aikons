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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 19h6c2.828 0 4.243 0 5.121-.879C19 17.243 19 15.828 19 13v-3m0 0c.7 0 2.009 1.994 2.5 2.5M19 10c-.7 0-2.009 1.994-2.5 2.5M5 7v10"
      />
      <circle cx={5} cy={5} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={19} cy={5} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={5} cy={19} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default GitBranch;
